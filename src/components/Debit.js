import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Debit extends Component {
    constructor(props){
        super(props);
        this.state={
            debits : [],
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
            dabits : res.data,
          })
        })
        .catch(err => {
          console.log(err);
        })
    }
    descChange =(event)=>{
        this.setState({ desc : event.target.value})
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
            prevState.debits.push(new_data)
        )
        })
        console.log({new_data})
    }
    render() {
      return (
          <div>
            <h1>Debits</h1>
            <p><Link to="/">Back Home</Link></p>
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

          </div>
      );
    }
  }
  
  export default Debit;