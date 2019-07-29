import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
    
class Home extends Component {
    render() {
    return (
        <div>
            <h1>
            <img src="data:image/png;base64,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" alt="bank"/>
            Bank of React
            </h1>
            <p><Link to="/debit">Debit</Link></p>
            <p><Link to="/credit">Credit</Link></p>
            <Link to="/userProfile">User Profile</Link>
            <Link to="/login">Login</Link>

            <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
    }
}
    
export default Home;