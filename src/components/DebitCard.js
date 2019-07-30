import React, {Component} from 'react';
import './DebitCard.css';

class DebitCard extends Component {
    render(){
      var Desc = this.props.data.description;
      var Amount = this.props.data.amount;
      return (
        <div className ="debit-card">
          <p>{Desc}</p>
          <p>Costed: ${Amount} </p>
        </div>
      );
    }
  }



export default DebitCard;