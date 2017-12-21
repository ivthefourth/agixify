import React, { Component } from 'react';
import './App.css';
import BoardTitle from './components/BoardTitle';
import FreeForm from './components/FreeForm';
import Story from './components/Story';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BoardTitle />
        <div className="free-form-fields">
          <FreeForm /> <FreeForm /> <FreeForm />
        </div>
        <div>
          <Story />
        </div>
        <div>
          <Story />
        </div>
      </div>
    );
  }
}

export default App;
