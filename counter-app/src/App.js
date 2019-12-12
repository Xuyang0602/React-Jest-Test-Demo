import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="component-counter-display">Counter Display</h1>
        <button data-test="component-btn">Increase Counter</button>
      </div>
    );
  }
}

export default App;
