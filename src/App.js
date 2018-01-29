import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './Number';

class App extends Component {
  constructor() {
    super() 

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
