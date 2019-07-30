import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
    
class Home extends Component {
    render() {
    return (
        <div className="Content">
            <h1>
            Bank of React
            <AccountBalance accountBalance={this.props.accountBalance}/>
            </h1>
            <p><Link to="/debit">Debit</Link></p>
            <p><Link to="/credit">Credit</Link></p>
            <Link to="/userProfile">User Profile</Link>


        </div>
    );
    }
}
    
export default Home;