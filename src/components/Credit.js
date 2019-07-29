import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CreditCard from './CreditCard'
import PropTypes from 'prop-types';

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
        let num = parseFloat(event.target.value);
        this.setState({ amount : num})
    }

    
    render() {
        let credit = this.props.creditData.map((credits, key)=>
        <CreditCard data = {credits} key={key} />
        )
      return (
          <div>
            <h1>Credits</h1>
            <p><Link to="/">Back Home</Link></p>
            <br></br>
            
            <form className = "form">
                    <label>
                        Description:
                        <input type="text" name="firstname" value={this.state.description} onChange={this.descChange}/>
                    </label>
                    
                    <label>
                        Amount:
                        <input type="number" name="lastname" defaultValue={this.state.amount} onChange={this.amountChange} />
                    </label>
                    <br></br>
                </form>
                <button onClick={() => this.props.addNewCredit(this.state.description, this.state.amount)}>Add</button> 
                {credit}
          </div>
      );
    }
  }
  
Credit.propTypes = {
    amount: PropTypes.number,
}

  export default Credit;