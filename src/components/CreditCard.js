import React, {Component} from 'react';
import './CreditCard.css';

class CreditCard extends Component {
    constructor(props){
      super(props);
    }
    render(){
      var Desc = this.props.data.description;
      var Amount = this.props.data.amount;
      return (
        <div>
          <p className ="debit">{Desc} | Costed: {Amount} </p>

        </div>
      );
    }
  }



export default CreditCard;