import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
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
    componentDidMount() {
        this.grabData();
    }
    grabData=()=>{
        axios.get(`https://moj-api.herokuapp.com/debits`)
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
    setDebit=()=>{
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
        let debit = this.state.data.map((debits)=>
        <DebitCard data = {debits}/>
        )
      return (
          <div>
            <h1>Debits</h1>
            <p2><Link to="/">Back Home</Link></p2>
            <br></br>
            

            <form className = "form">
                    <label>
                        Description:
                        <input type="text" name="firstname" value={this.state.desc} onChange={this.descChange}/>
                    </label>
                    <br></br>
                    <label>
                        Amount:
                        <input type="text" name="lastname" value={this.state.amount} onChange={this.amountChange} />
                    </label>
                    <br></br>
                </form>
                <button onClick={()=>this.setDebit()}>Add</button> 
                {debit}
          </div>
      );
    }
  }
  
  export default Debit;