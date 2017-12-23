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
    console.log(this.props);

    return (
      <div className="boardTitle">

          <div className="cursor: pointer">
            <div className="container-for-span">
              <div style={divStyle}>
                <span className="titleText" > 
                    <input type="text" value={this.props.title} 
                      onChange={(e) => {e.preventDefault(); 
                      this.props.modifyText(e.target.value); console.log("Hey it worked");}}  />
                </span>

              </div>

            </div>

          </div> {/*cursor:pointer*/}

       </div> 

    );
  }
}

export default BoardTitle;

