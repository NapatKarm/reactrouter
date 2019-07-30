import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DebitCard from './DebitCard'

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
          <div>
            <h1>Debits</h1>
            <p><Link to="/userProfile">Profile</Link></p>
            <br></br>
            
            <form className = "form">
                    <label>
                        Description:
                        <input type="text" name="firstname" value={this.state.description} onChange={this.descChange}/>
                    </label>
                    <br></br>
                    <label>
                        Amount:
                        <input type="number" name="lastname" value={this.state.amount} onChange={this.amountChange} />
                    </label>
                    <br></br>
                </form>
                <button onClick={() => this.props.addNewDebit(this.state.description, this.state.amount)}>Add</button> 
                {debit}
          </div>
      );
    }
  }
  
  export default Debit;