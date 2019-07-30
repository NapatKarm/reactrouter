import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <h1>User Profile</h1>
          <div>Username: {this.props.user.userName}</div>
          <div>Balance: {this.props.balance}</div>
          <div>Member Since: {this.props.memberSince}</div>
          <Link to="/home">Home</Link>
          <Link to="/debit">Debit</Link>
          <Link to="/credit">Credit</Link>
          <Link to="/">LogOut</Link>
        </div>
    );
  }
}

export default UserProfile;