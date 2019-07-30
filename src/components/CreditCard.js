import React, {Component} from 'react';
import './CreditCard.css';

class CreditCard extends Component {
    render(){
      var Desc = this.props.data.description;
      var Amount = this.props.data.amount;
      return (
        <div className ="credit-card">
          <p>{Desc}</p>
          <p>Costed: {Amount} </p>
        </div>
      );
    }
  }



export default CreditCard;