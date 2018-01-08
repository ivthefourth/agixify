import React, { Component } from 'react';
import './App.css';
//import Story from './components/Story';
import BoardContainer from './containers/BoardContainer';
import FreeFormContainer from './containers/FreeFormContainer';
import CreateStoryContainer from './containers/CreateStoryContainer';
import StoriesContainer from './containers/StoriesContainer';


// let logoContainer = {
//     backgroundColor:"linear-gradient(to right, white 50%, #00b4f0 50.001%)",
// }

class App extends Component {
  render() {
    return (
      <div className="App" >
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
