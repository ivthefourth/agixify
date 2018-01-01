import React, { Component } from 'react';
import '../App.css';

class FreeForm extends Component {
	render() {
	return(
	  <div className="TextField">
	  	 {this.props.freeTextAreas.map((newTextAreas, index) => (
	  	 	<textarea key={index}
	    	onChange={(e) => {e.preventDefault(); 
	    	this.props.modifyText(e.target.value, index); }} />)) }
	  </div>
	  )
	}
};

export default FreeForm;
