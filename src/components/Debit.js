import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DebitCard from './DebitCard'
import './CreditCard.css';

class Debit extends Component {
    constructor(props){
        super(props);
        this.state={
            data : [],
            description : "",
            amount : "",
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
        let debit = this.props.debitData.map((debits, key)=>
        <DebitCard data = {debits} key = {key} />
        )
      return (
          <div className ="credit-container">
            <h1>Debits</h1>
            <p>Balance: {this.props.balance}</p>
            <p><Link to="/userProfile">Back To Profile</Link></p>
            <br></br>
            
            <form className ="form">
                    <input type="text" name="firstname" value={this.state.description} onChange={this.descChange} placeholder="Description" />
                    <input type="number" name="lastname" value={this.state.amount} onChange={this.amountChange} placeholder="Amount" />
                </form>
                <button onClick={() => this.props.addNewDebit(this.state.description, this.state.amount)}>Add</button> 
                <div className ="credit-card-container">
                {debit}
                </div>
          </div>
      );
    }
  }
  
  export default Debit;