import React, { Component } from 'react';
import '../App.css';

let inputStyle = {
  textAlign: 'center',
  border: '0px',
  width: '100%',
};

let spanStyle = {
  display: 'flex',
  position: 'relative',
  justify_content: 'space-between',
  align_items: 'center',

}

class StoryTitle extends Component {

  render() {
    console.log(this.props);

    return (
      <div className="StoryTitle">

          <div className="cursor: pointer">
            <div className="container-for-span">
              <span className="story-text" style={spanStyle}> 
                  <input placeholder="Some title" style={inputStyle} value={this.props.title} 
                    onChange={(e) => {e.preventDefault(); 
                    this.props.modifyStoryTitle(e.target.value); console.log("Hey it worked");}}  />
              </span>

            </div>

          </div> {/*cursor:pointer*/}

       </div> 

    );
  }
}

export default StoryTitle;
