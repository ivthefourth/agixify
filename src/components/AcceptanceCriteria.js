import React, { Component } from 'react';
import '../App.css';

const ac_style = {
	width: '100%',
	height: '100px',
	display: 'flex',
  	resize: 'none',
  	wrap: 'off',
  	outline: 'none',
}

class AcceptanceCriteria extends Component {
  render() {
    return (
      <div className="AcceptanceCriteria col-sm-4 flex-box">
       	 <textarea value={this.props.acceptanceCriteria} key={this.props.id}
       	 style={ac_style}  	 placeholder="enter acceptance criteria"
      	 onChange={(e) => {e.preventDefault(); 
	    this.props.modifyAC(e.target.value, this.props.id); }} />
       </div> 

    );
  }
}

export default AcceptanceCriteria;