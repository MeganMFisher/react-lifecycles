import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './Number';

class App extends Component {
  constructor() {
    super() 

    console.log('Constructor: Default state time')

    this.state = {
      count: 0
    }

    this.increase = this.increase.bind(this)
  }

  increase() {
    this.setState({
      count: this.state.count + 1
    })
  }

  componentWillMount() {
    console.log('ComponentWillMount: Component is about to mount')
  }

  componentDidMount() {
    console.log('ComponentDidMount: Component just mounted')
  }

  shouldComponentUpdate(newProps, newState) {
    // console.log(newProps, 'newProps') //any new props from parent
    // console.log(newState, 'newState') //what new state is going to be
    console.log("shouldComponentUpdate: Should component update?");

    if (newState.count < 5) {
      console.log("shouldComponentUpdate: Component should update!");
      return true;
    } else {
      console.log("shouldComponentUpdate: Component should not update!");
      // React.unmountComponentAtNode(document.getElementById('root'));
      return false;
    }
  }

  componentWillUpdate(newProps, newState) {
    // console.log(newProps, 'newProps') //any new props from parent
    // console.log(newState, 'newState') //what new state is going to be
    console.log('ComponentWillUpdate: Component is about to update')
  }

  componentDidUpdate(currentProps, currentState) {
    // console.log(currentProps, 'currentProps') //any current props
    // console.log(currentState, 'currentState') //what state currently is
    console.log('ComponentDidUpdate: Component just updated')
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount: Component is about to be removed from the DOM')
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Lifecycle Hooks</h1>
        </header>
          <Number number={this.state.count}/>
            <button onClick={this.increase}>
              +
            </button>
        
      </div>
    );
  }
}

export default App;
