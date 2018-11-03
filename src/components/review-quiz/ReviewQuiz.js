import React, { Component } from "react";
import Card from "../card/Card";
import "../quiz/Quiz.css";
import ReviewQuizSessionUseCase from "../../usecases/ReviewQuizUseCase.js";
import JsonQuestionGateway from "../../gateways/JsonQuestionGateway";

class ReviewQuiz extends Component {
  constructor(props) {
    super(props);

    const gateway = new JsonQuestionGateway();

    this.usecase = new ReviewQuizSessionUseCase(gateway);

    this.state = this.usecase.viewModel();

    this.onGuessChange = this.onGuessChange.bind(this);
    this.validate = this.validate.bind(this);
    this.resetQuiz = this.resetQuiz.bind(this);
    this.toggleAnswers = this.toggleAnswers.bind(this);
  }

  onGuessChange({ id, answer }) {
    console.log("on guess change");

    this.usecase.answerQuestion(id, answer);

    this.setState(this.usecase.viewModel());
  }

  validate() {
    console.log("validate");

    this.usecase.checkAnswers();

    this.setState(this.usecase.viewModel());
  }

  resetQuiz() {
    console.log("reset quiz");

    this.usecase.reset();

    this.setState(this.usecase.viewModel());
  }

  toggleAnswers() {
    console.log("toggle answers");

    this.usecase.toggleAnswers();

    this.setState(this.usecase.viewModel());
  }

  render() {
    return (
      <div className="quiz">
        <button onClick={this.validate}>Check Answers</button>
        <button onClick={this.resetQuiz}>Reset</button>
        <button onClick={this.toggleAnswers}>Toggle Answers</button>

        {this.renderCards()}
      </div>
    );
  }

  renderCards() {
    return this.state.questions.map(question => {
      return (
        <Card
          key={question.id}
          id={question.id}
          imageUrl={question.imageUrl}
          guess={question.answer}
          correctAnswer={question.correctAnswer}
          correct={question.isCorrect}
          submitted={this.state.submitted}
          showAnswers={this.state.showAnswers}
          onGuessChange={this.onGuessChange}
        />
      );
    });
  }
}

export default ReviewQuiz;
