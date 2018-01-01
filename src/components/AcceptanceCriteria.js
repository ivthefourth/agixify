import React, { Component } from 'react';
import '../App.css';

class AcceptanceCriteria extends Component {
  render() {
    return (
      <div className="AcceptanceCriteria col-sm-5 flex-box" value={this.props.text_field}
      	input="AC area"  onChange={(e) => {e.preventDefault(); 
	    this.props.modifyAC(e.target.value); console.log("here's my AC text");}}>
	    	AC area
       </div> 

    );
  }
}

export default AcceptanceCriteria;