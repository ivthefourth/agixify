import React, { Component } from 'react';
import '../App.css';

let inputStyle = {
  textAlign: 'center',
  border: '0px',
  width: '100%',
  backgroundColor: 'rgb(0,180,240)',
  color: 'white',
};

let spanStyle = {
  display: 'flex',
  position: 'relative',
  justify_content: 'space-between',
  align_items: 'center',

}

class StoryTitle extends Component {

  render() {

    return (
      <div className="StoryTitle"  style={{marginTop: "1rem"}} >

          <div className="cursor: pointer">
            <div className="container-for-span">
              <span className="story-text" style={spanStyle}> 
                  <input style={inputStyle} value={this.props.title} 
                    onChange={(e) => {e.preventDefault(); 
                    this.props.modifyStoryTitle(e.target.value, this.props.id); }}  />
              </span>

            </div>

          </div> {/*cursor:pointer*/}

       </div> 

    );
  }
}

export default StoryTitle;
