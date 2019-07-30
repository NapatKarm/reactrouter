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

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  // INITIAL MOUNTS

  componentDidMount() {
    this.fetchCredit();
  }

  // API CALLS
  fetchCredit=()=>{
    axios.get(`https://moj-api.herokuapp.com/credits`)
    .then(res => {
      this.setState({
        creditData : res.data,
      })
      this.calculateCredit();
      
    })
    .catch(err => {
      console.log(err);
    })
}

// ADDING CREDIT AND DEBIT CARDS TO DATA
  addNewCredit = (des, amount) =>{
    let new_data = {
        description : des,
        amount : amount,
    }

    this.setState(prevState => ({
      creditData: [...prevState.creditData, new_data],
      // accountBalance: this.state.accountBalance + new_data.amount,
    }))
    this.calculateCredit();
  }

   // INITIAL CALCULATIONS AFTER API CALL
   // CREDIT
   calculateCredit = () => {
    let value = 0;
    for(let i = 0; i < this.state.creditData.length; i++) {
      value += this.state.creditData[i].amount;
    }
    this.setState({
      creditBalance : value,
    })
    this.calculateInitialBalance();
  }

  // BALANCE
  calculateInitialBalance = () => {
    this.setState({
      accountBalance: this.state.creditBalance - this.state.debitBalance,
    })
  }

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (<UserProfile user={this.state.currentUser} balance={this.state.accountBalance}  />);
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);
    const DebitComponent = () => (<Debit/>);
    const CreditComponent = () => (<Credit creditData={this.state.creditData}  addNewCredit={this.addNewCredit} />);

    return (
      <Router>
        <div>
            <Route exact path="/" render={LogInComponent} />
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/home" render={HomeComponent}/>
            <Route exact path="/debit" render={DebitComponent}/>
            <Route exact path="/credit" render={CreditComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;