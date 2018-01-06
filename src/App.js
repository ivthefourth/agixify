import React, { Component } from 'react';
import './App.css';
//import Story from './components/Story';
import BoardContainer from './containers/BoardContainer';
import FreeFormContainer from './containers/FreeFormContainer';
import CreateStoryContainer from './containers/CreateStoryContainer';
import StoriesContainer from './containers/StoriesContainer';
import agixifylogo from './images/agixifylogo.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div> <img src={agixifylogo}  className="logo"  alt="" /> </div>
        <BoardContainer />
        <div className="free-form-fields">
          <FreeFormContainer  /> 
        </div>

        <CreateStoryContainer id="newStory" />

        <StoriesContainer />

      </div>
    )
  }
};

export default App;
