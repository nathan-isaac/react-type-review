import React, { Component } from 'react';
import './App.css';
import Quiz from "./components/quiz/Quiz";


class App extends Component {

  render() {
    return (
      <div className="App">
        <Quiz></Quiz>
      </div>
    );
  }
}

export default App;
