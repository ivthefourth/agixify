import React, { Component } from 'react';
import '../App.css';

let divStyle = {
  position: 'relative',
  display: 'flex',
  justify_content: 'space-between',
  align_items: 'center',
  textAlign: 'center'
};

class BoardTitle extends Component {

  render() {

    return (
      <div className="BoardTitle">
          <div className="titleText" style={divStyle}> 
              <input type="text" value={this.props.title} 
                onChange={(e) => {e.preventDefault(); 
                this.props.modifyText(e.target.value); }}  />
          </div>

       </div> 

    );
  }
}

export default BoardTitle;

