import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Debit from './components/Debit';
import Credit from './components/Credit';

class App extends Component {
  constructor() {
    super();
    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

 
  

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);
    const DebitComponent = () => (<Debit/>);
    const CreditComponent = () => (<Credit/>);
    return (
      <Router>
        <div>
            <Route exact path="/" render={HomeComponent} />
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/debit" render={DebitComponent}/>
            <Route exact path="/credit" render={CreditComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;