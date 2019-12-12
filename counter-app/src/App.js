import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="component-counter-display">
          Counter Display Currently {this.state.counter}
        </h1>
        <button
          data-test="component-btn"
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Increase Counter
        </button>
      </div>
    );
  }
}

export default App;
