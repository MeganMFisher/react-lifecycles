import React, {Component} from 'react';

export default class Number extends Component {


    componentWillReceiveProps(newProps) {
        console.log("componentWillReceiveProps: Component will get new props!");
    }

    render() {
        return (
            <div>
                {this.props.number}
            </div>
        )
    }
}