import React, { Component } from 'react';
import Card from '../card/Card';
import "../quiz/Quiz.css";
import ReviewQuizSessionUseCase from '../../usecases/ReviewQuizUseCase.js';
import JsonQuestionGateway from '../../gateways/JsonQuestionGateway';

class ReviewQuiz extends Component {
  constructor(props) {
    super(props);

    const gateway = new JsonQuestionGateway();

    this.usecase = new ReviewQuizSessionUseCase(gateway);

    this.state = this.usecase.viewModel();

    this.onGuessChange = this.onGuessChange.bind(this);
    this.validate = this.validate.bind(this);
    this.shuffleCards = this.shuffleCards.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
    this.resetQuiz = this.resetQuiz.bind(this);
  }    

  onGuessChange({id, answer}) {
    this.usecase.answerQuestion(id, answer);
    
    this.setState(this.usecase.viewModel());
  }

  validate() {
    this.usecase.checkAnswers();
    
    this.setState(this.usecase.viewModel());
  }

  shuffleCards() {
  }

  shuffleArray(array) {
  }

  resetQuiz () {
  }

  renderCards() {
    return this.state.questions.map(question => {
      return (
        <Card key={question.id} id={question.id} imageLocation={question.imageUrl} guess={question.answer} correct={question.correct} onGuessChange={this.onGuessChange}></Card>
      )
    })
  }

  render() {
    return (
      <div className="quiz">
        <button onClick={this.validate}>Check Answers</button>
        <button onClick={this.shuffleCards}>Shuffle</button>
        <button onClick={this.resetQuiz}>Reset</button>

        { this.renderCards() }
      </div>
    );
  }
}

export default ReviewQuiz;