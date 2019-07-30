import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CreditCard from './CreditCard';
import './Credit.css';

class Credit extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            description : "",
            amount : 0,
        }
    };

    descChange =(event)=>{
        this.setState({ description : event.target.value})
    }

    amountChange =(event)=>{
        let value = event.target.value;
        value = parseFloat(value);
        value = value.toFixed(2);
        value = parseFloat(value);
        this.setState({ amount : value})
    }

    render() {
        let credit = this.props.creditData.map((credits, key)=>
        <CreditCard data = {credits} key={key} />
        )
      return (<div className ="credit-container">
                <h1>Credits</h1>
                <p>Balance: {this.props.balance}</p>
                <Link to="/userProfile">Back To Profile</Link>
                
                <form className ="form">
                    <input type="text" name="firstname" value={this.state.description} onChange={this.descChange} placeholder="Description" />
                    <input type="number" name="lastname" value={this.state.amount} onChange={this.amountChange} placeholder="Amount" />
                </form>

                <button onClick={() => this.props.addNewCredit(this.state.description, this.state.amount)}>Add</button> 

                <div className="credit-card-container">
                    {credit}
                </div>
                    
            </div>
      );
    }
}


  export default Credit;