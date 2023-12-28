import './NumberCount.css'

import React from "react";

class NumberCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        }
    }

    decrease =() => {
        this.setState({
            number: this.state.number - 1
        })
    }
    increase =() => {
        this.setState({
            number: this.state.number + 1
        })
    }


    render() {
        const {number} = this.state
        return (
            <div className="container">
            <button className='increBtn' onClick={this.decrease}>Decrease</button>
            <span className='number'>{number}</span>
            <button className='decreBtn' onClick={this.increase}>Increase</button>
            </div>
        )
    }
}
export default NumberCount;