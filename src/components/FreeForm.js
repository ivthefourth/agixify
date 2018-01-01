import React, { Component } from 'react';
import '../App.css';

class FreeForm extends Component {
	render() {
	return(
	  <div className="TextField">
	  	 {this.props.freeTextAreas.map((newTextAreas, index) => {
	  	 	return <textarea key={index}
	    		value={newTextAreas}
	    		onChange={(e) => {
		  	 		e.preventDefault(); 
		    		this.props.modifyFreeText(e.target.value, index)
		    	}} 
	    	/>
	  	})}
	  </div>
	  )
	}
};

export default FreeForm;
