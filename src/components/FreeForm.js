import React, { Component } from 'react';
import '../App.css';

class FreeForm extends Component {
	render() {
	return(
	  <div >
	  	 {this.props.freeTextAreas.map((newTextAreas, index) => {
	  	 	return <textarea key={index}   className="TextField"
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
