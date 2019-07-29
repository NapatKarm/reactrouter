import React, {Component} from 'react';
import './DebitCard.css';

class DebitCard extends Component {
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



export default DebitCard;