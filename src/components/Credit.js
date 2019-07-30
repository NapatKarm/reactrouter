import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CreditCard from './CreditCard'

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
      return (<div>
                <h1>Credits</h1>
                <p> <Link to="/userProfile">Back Home</Link> </p>
                <br></br>
                
                <form className ="form">
                        <label>
                            <input type="text" name="firstname" value={this.state.description} onChange={this.descChange} />
                        </label>
                        
                        <label>
                            <input type="number" name="lastname" value={this.state.amount} onChange={this.amountChange} />
                        </label>
                    
                </form>
                    <button onClick={() => this.props.addNewCredit(this.state.description, this.state.amount)}>Add</button> 
                    {credit}
            </div>
      );
    }
}


  export default Credit;