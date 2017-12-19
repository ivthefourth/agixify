import React, { Component } from 'react';
import './App.css';
import {createStore} from 'redux';
import { Provider, connect } from 'react-redux'

//reducer
function array(state = [], action){
  switch(action.type){
    case 'CREATE': {
      let id = state.reduce( (maxId, item) => item.id >= maxId ? item.id : maxId, 0);
      id += 1;
      let newItem = {id, ...action.item}
      return [...state, newItem];
    }
    case 'DELETE': {
      let index = state.findIndex(item => item.id === action.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    case 'EDIT_TEXT': {
      let index = state.findIndex(item => item.id === action.id);
      var newState = state.slice(0);
      newState[index].text = action.text;
      return newState;
    }
    default: {
      return state;
    }
  }
}

//store
let store = createStore(array);
store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch({ type: 'CREATE', item: {text:'hello'} });
store.dispatch({ type: 'CREATE', item: {text:'wow pow zim zam'} });
store.dispatch({ type: 'CREATE', item: {text:'woo redux is cool!'} })

window.store = store;

function deleteItem(id) {
  return {
    type: 'DELETE',
    id
  }
}

function editItem(item) {
  return {
    type: 'EDIT_TEXT',
    id: item.id,
    text: item.text
  }
}


class CoolInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps){
    //console.log('receive props');
    //only if next props are diff, need to add if statement... maybe need should component update? 
    this.setState({text: nextProps.text});
  }

  handleChange(event) {
    //console.log('handleChange')
    let val = event.target.value
    this.setState({text: val});
  }

  render() {
    console.log('render cool input')
    const {text} = this.state;
    return (
      <input 
        style={{width: '500px'}}
        value={text}
        onChange={this.handleChange}
        onBlur={() => this.props.text !== this.state.text ? this.props.saveChange({id: this.props.id, text: this.state.text}) : null}
      />
    )
  }
}

const ListItem = (props) => (
  <li>
    <CoolInput id={props.id} text={props.text} saveChange={props.saveChange}/>
    <button onClick={props.deleteItem}>Delete</button>
  </li>
)

const List = (props) => {
  let items = props.items.map(item => 
    <ListItem 
      key={item.id} 
      id={item.id}
      text={item.text} 
      deleteItem={() => props.del(item.id)} 
      saveChange={props.saveChange}
    />
  )
  return (
  <ul>
    {items}
  </ul>
  )
}



const RealList = connect(
  (state) => ({items: state}),
  (dispatch) => ({
    del: id => dispatch(deleteItem(id)),
    saveChange: item => dispatch(editItem(item))
  })
)(List);





class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <RealList />
        </div>
      </Provider>
    );
  }
}

export default App;
