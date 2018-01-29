import React, {Component} from 'react';

export default class Number extends Component {


    componentWillReceiveProps(nextProps) {
        console.log(this.props) //What props currently is
        console.log(nextProps, 'nextProps') //What props will be
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