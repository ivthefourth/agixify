import React, { Component } from 'react';
import '../App.css';

let divStyle = {
  position: 'relative',
  display: 'flex',
  justify_content: 'space-between',
  align_items: 'center',
  textAlign: 'center',
  // backgroundColor: 'rgb(0,170,255)',
};

class BoardTitle extends Component {

  render() {

    return (
      <div className="BoardTitle">
              <input type="text" value={this.props.title} 
                className="titleText" style={divStyle}
                onChange={(e) => {e.preventDefault(); 
                this.props.modifyText(e.target.value); }}  />

       </div> 

    );
  }
}

export default BoardTitle;

