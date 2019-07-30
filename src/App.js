import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Debit from './components/Debit';
import Credit from './components/Credit';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      creditData: [],
      creditBalance: 0,
      debitData: [],
      debitBalance: 0,
    }
  }

  // LOGIN
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  // INITIAL MOUNTS
  componentDidMount() {
    this.fetchCredit();
    this.fetchDebit();
  }

  // API CALLS
  // CREDIT
  fetchCredit=()=>{
    axios.get(`https://moj-api.herokuapp.com/credits`)
    .then(res => {
      this.setState({
        creditData : res.data,
      })
      this.calculateCredit();
      this.calculateBalance();
    })
    .catch(err => {
      console.log(err);
    })
  }

  // DEBIT
  fetchDebit=()=>{
    axios.get(`https://moj-api.herokuapp.com/debits`)
    .then(res => {
      this.setState({
        debitData : res.data,
      })
      this.calculateDebit();
      this.calculateBalance();
    })
    .catch(err => {
      console.log(err);
    })
  }

// ADDING CREDIT AND DEBIT CARDS TO DATA
// CREDIT
  addNewCredit = (des, amount) =>{
    let new_data = {
        description : des,
        amount : amount,
    }

    let num = this.state.accountBalance + new_data.amount;
    num = num.toFixed(2);
    num = parseFloat(num);

    this.setState(prevState => ({
      creditData: [...prevState.creditData, new_data],
      accountBalance: num,
    }))
  }

  // DEBIT
  addNewDebit = (des, amount) =>{
    let new_data = {
        description : des,
        amount : amount,
    }
    let num = this.state.accountBalance - new_data.amount;
    num = num.toFixed(2);
    num = parseFloat(num);

    this.setState(prevState => ({
      debitData: [...prevState.debitData, new_data],
      accountBalance: num,
    }))
  }

  // INITIAL CALCULATIONS AFTER API CALL
  // BALANCE
  calculateBalance = () => {
    let num = this.state.creditBalance - this.state.debitBalance;
    num = num.toFixed(2);
    num = parseFloat(num);
    this.setState({
      accountBalance: num,
    })
  }

   // CREDIT
   calculateCredit = () => {
    let value = 0;
    for(let i = 0; i < this.state.creditData.length; i++) {
      value += this.state.creditData[i].amount;
    }

    value = value.toFixed(2);
    value = parseFloat(value);
  
    this.setState({
      creditBalance : value,
    })
  }

  // DEBIT
  calculateDebit = () => {
    let value = 0;
    for(let i = 0; i < this.state.debitData.length; i++) {
      value += this.state.debitData[i].amount;
    }

    value = value.toFixed(2);
    value = parseFloat(value);
    
    this.setState({
      debitBalance : value,
    })
  }

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (<UserProfile user={this.state.currentUser} balance={this.state.accountBalance}  />);
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);
    const DebitComponent = () => (<Debit debitData={this.state.debitData}  addNewDebit={this.addNewDebit} balance={this.state.accountBalance}/>);
    const CreditComponent = () => (<Credit creditData={this.state.creditData}  addNewCredit={this.addNewCredit} balance={this.state.accountBalance} />);

    return (
      <Router basename ="/reactrouter">
        <Route exact path="/" render={LogInComponent} />
        <Route exact path="/userProfile" render={UserProfileComponent}/>
        <Route exact path="/home" render={HomeComponent}/>
        <Route exact path="/debit" render={DebitComponent}/>
        <Route exact path="/credit" render={CreditComponent}/>
      </Router>
    );
  }
}

export default App;