import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import CreditCard from './CreditCard'

class Credit extends Component {
    constructor(props){
        super(props);
        this.state={
            data : [],
            description : "",
            amount : "",
        }
    };
    componentDidMount() {
        this.grabData();
    }
    grabData=()=>{
        axios.get(`https://moj-api.herokuapp.com/credits`)
        .then(res => {
          console.log(res.data)
          this.setState({
            data : res.data,
          })
        })
        .catch(err => {
          console.log(err);
        })
    }
    descChange =(event)=>{
        this.setState({ description : event.target.value})
    }
    amountChange =(event)=>{
        this.setState({ amount : event.target.value})
    }
    setCredit=()=>{
        let new_data = {
            description : this.state.description,
            amount : this.state.amount
        }
    this.setState(prevState => {
        return (
            prevState.data.push(new_data)
        )
        })
        console.log({new_data})
        this.setState({ 
            description : "",
            amount : ""
        })
    }
    render() {
        let credit = this.state.data.map((credits)=>
        <CreditCard data = {credits}/>
        )
      return (
          <div>
            <h1>Credits</h1>
            <p2><Link to="/">Back Home</Link></p2>
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
                <button onClick={()=>this.setCredit()}>Add</button> 
                {credit}
          </div>
      );
    }
  }
  
  export default Credit;