import React, { Component } from 'react';
import '../App.css';
import '../containers/TextChangeContainer';

let divStyle = {
  position: 'relative',
  display: 'flex',
  justify_content: 'space-between',
  align_items: 'center',
  textAlign: 'center'
};

class BoardTitle extends Component {

  render() {
    console.log('boardTitle rendered');

    const {text} = this.state;
    return (
      <div className="boardTitle">

          <div className="cursor: pointer">
            <div className="container-for-span">
              <div style={divStyle}>
                <span className="titleText" 
                contenteditable="true" onChange={this.handleChange}
                onBlur={() => this.props.text !==this.state.text ? this.props.saveChange({id: this.props.id, text: this.state.text}) : null} />

              </div>

            </div>

          </div> {/*cursor:pointer*/}

       </div> 

    );
  }
}

export default BoardTitle;

