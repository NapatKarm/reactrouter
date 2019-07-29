import React, {Component} from 'react';
import './DebitCard.css';

class DebitCard extends Component {
    constructor(props){
      super(props);
    }
    render(){
      var Desc = this.props.data.description;
      var Amount = this.props.data.amount;
      return (
        <div>
          <p>{Desc} | Costed: {Amount} </p>

        </div>
      );
    }
  }



export default DebitCard;