import "./App.css"

import React, {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    }
  }
  increment = () => {
    this.setState(prevState => ({
      number: prevState.number + 1
    }))
  }
  decrement = () => {
    this.setState({
      number: this.state.number - 1
    })
  }
  render( ) {
    return (
      <div className="container">
        <button onClick={this.increment}>Increment</button>
        <h3>{this.state.number}</h3>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
export default App;