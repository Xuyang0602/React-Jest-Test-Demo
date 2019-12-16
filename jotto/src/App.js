import React, { Component } from "react";
import "./App.css";
import Congrats from "./Congrats";
import GuessWords from "./GuessWords";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessWords
          guessWords={[{ guessWord: "train", letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

export default App;
