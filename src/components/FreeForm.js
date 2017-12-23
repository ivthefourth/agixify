import React, { Component } from 'react';
import '../App.css';

class FreeForm extends Component {
	render() {
	return(
	  <div className="TextField">
	    <textarea value={this.props.text_field}
	    	onBlur={(e) => {e.preventDefault(); 
	    	this.props.modifyText(e.target.value); console.log("here's my freeform text");}} />
	  </div>
	  )
	}
};

export default FreeForm;
