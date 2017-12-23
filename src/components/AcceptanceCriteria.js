import React, { Component } from 'react';
import '../App.css';

class AcceptanceCriteria extends Component {
  render() {
    return (
      <div className="AcceptanceCriteria col-sm-5 flex-box" value={this.props.text_field}
      	onBlur={(e) => {e.preventDefault(); 
	    this.props.modifyText(e.target.value); console.log("here's my AC text");}}>

       </div> 

    );
  }
}

export default AcceptanceCriteria;