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









  componentDidCatch(error, info) {
    console.log('componentDidCatch: ', error, info)
  }

  // Error boundaries only catch errors in the components below them in the tree. An error boundary can’t catch an error within itself.

  // Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.



  // componentDidCatch(errorString, errorInfo) {
  //   this.setState({
  //     error: errorString
  //   });
  //   ErrorLoggingTool.log(errorInfo);
  // }
  // render() {
  //   if(this.state.error) return <ShowErrorMessage error={this.state.error} />
  //   return (
  //     // render normal component output
  //   );
  // }





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
