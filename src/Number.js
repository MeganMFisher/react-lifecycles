import React, {Component} from 'react';

export default class Number extends Component {


    componentWillReceiveProps(nextProps) {
        // console.log(this.props) //What props currently is
        // console.log(nextProps, 'nextProps') //What props will be
        console.log("componentWillReceiveProps: Component will get new props!");
    }
    // We have access to both the next props (via nextProps), and our current props (via this.props). Most Common Use Case: Acting on particular prop changes to trigger state transitions. Can call setState.

    render() {
        console.log('Rendering Number.js')
        return (
            <div>
                {this.props.number}
            </div>
        )
    }
}