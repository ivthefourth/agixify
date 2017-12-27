import React, { Component } from 'react';
import './App.css';
import Story from './components/Story';
import BoardContainer from './containers/BoardContainer';
import FreeFormContainer from './containers/FreeFormContainer';
import CreateStory from './components/CreateStory';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BoardContainer />
        <div className="free-form-fields">
          <FreeFormContainer /> <FreeFormContainer /> <FreeFormContainer />
        </div>

      <CreateStory />

{/*<-- Story goes here -->*/}
        <div>
          <Story /> {/* pass properties to story here from redux */}
        </div>
        <div>
          <Story />
        </div>
      </div>
    );
  }
}

export default App;
