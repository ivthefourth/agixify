import React, { Component } from 'react';
import '../App.css';
import agixifylogo from '../images/agixifylogo.png';

let divStyle = {
  position: 'relative',
  paddingLeft: '3rem'
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
          <div className="logo-and-logout">
            <img src={agixifylogo}  className="logo"  alt="" />
            <a href="/logout">Logout</a>
          </div>
       </div> 

    );
  }
}

export default BoardTitle;

