import React, { Component } from 'react';
import './App.css';
import ReviewQuiz from "./components/review-quiz/ReviewQuiz";


class App extends Component {

  render() {
    return (
      <div className="App">
        <ReviewQuiz></ReviewQuiz>
      </div>
    );
  }
}

export default App;
