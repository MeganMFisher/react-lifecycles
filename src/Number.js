import React, {Component} from 'react';

export default class Number extends Component {
    constructor() {
        super() 
    
        console.log('Constructor: Default state time')
    
        this.state = {
          number: 0
        }
    }
    
    
      componentWillMount() {
        console.log('ComponentWillMount: Component is about to mount')
      }
      //There is no component to play with yet, so you can’t do anything involving the DOM. Nothing has changed since your component’s constructor was called, which is where you should be setting up your component’s default configuration. Most Common Use Case: App configuration in your root component. Can call setState but don’t. Use default state instead.
    
      componentDidMount() {
        console.log('ComponentDidMount: Component just mounted')
      }
      // Doing AJAX in componentDidMount will guarantee that there’s a component to update. Most Common Use Case: Starting AJAX calls to load in data for your component. Can call setState.


    componentWillReceiveProps(nextProps) {
        // console.log(this.props) //What props currently is
        // console.log(nextProps, 'nextProps') //What props will be
        console.log("componentWillReceiveProps: Component will get new props!");
        this.setState({
            number: nextProps.number
        })
    }
    // We have access to both the next props (via nextProps), and our current props (via this.props). Most Common Use Case: Acting on particular prop changes to trigger state transitions. Can call setState.
    
      shouldComponentUpdate(newProps, newState) {
        // console.log(newProps, 'newProps') //any new props from parent
        // console.log(newState, 'newState') //what new state is going to be
        console.log("shouldComponentUpdate: Should component update?");
    
        if (newState.number < 5) {
          console.log("shouldComponentUpdate: Component should update!");
          return true;
        } else {
          console.log("shouldComponentUpdate: Component should not update!");
        //   React.unmountComponentAtNode(document.getElementById('root'));
          return false;
        }
      }
      //Should always return a boolean — an answer to the question, “should I re-render?” The default is that it always returns true. Awesome place to improve performance. Most Common Use Case: Controlling exactly when your component will re-render. Cannot call setState.
    
      componentWillUpdate(newProps, newState) {
        // console.log(newProps, 'newProps') //any new props from parent
        // console.log(newState, 'newState') //what new state is going to be
        console.log('ComponentWillUpdate: Component is about to update')
      }
      //Used instead of componentWillReceiveProps on a component that also has shouldComponentUpdate. Cannot call setState.
    
      componentDidUpdate(currentProps, currentState) {
        // console.log(currentProps, 'currentProps') //any current props
        // console.log(currentState, 'currentState') //what state currently is
        console.log('ComponentDidUpdate: Component just updated')
      }
      //Most Common Use Case: Updating the DOM in response to prop or state changes. Can call setState.
    
      componentWillUnmount() {
        console.log('ComponentWillUnmount: Component is about to be removed from the DOM')
      }
      //Most Common Use Case: Cleaning up any leftover debris from your component. Cannot call setState.
    


    render() {
        console.log('Render Number')
        return (
            <div>
                {this.props.number}
            </div>
        )
    }
}