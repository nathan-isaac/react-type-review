import React, { Component } from 'react';
import Card from '../card/Card';
import jsonData from "../../source-data.js";
import "./Quiz.css";

class Quiz extends Component {
  constructor(props) {
    super(props);


    const cards = jsonData.map((card, index) => {
      return {
        id: index,
        name: card.name,
        image_url: card.img,
        guess: '',
        correct: null
      }
    });

    this.state = {
      score: 0,
      mode: "flashcard",
      namesHidden: true,
      cards: cards,
    }

    this.onGuessChange = this.onGuessChange.bind(this);
    this.validate = this.validate.bind(this);
    this.shuffleCards = this.shuffleCards.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
    this.resetQuiz = this.resetQuiz.bind(this);
  }    

  onGuessChange({name, guess}) {
    const cards = [...this.state.cards];

    const card = cards.find(card => {
      return card.name === name;
    });

    card.guess = guess;

    this.setState({cards: cards});
  }

  validate() {
    const cards = [...this.state.cards];

    cards.forEach(card => {
      card.correct = card.name.toLowerCase() === card.guess.toLocaleLowerCase();
    });

    this.setState({cards: cards});
  }

  shuffleCards() {
    const cards = [...this.state.cards];
    this.shuffleArray(cards);
    this.setState({cards: cards});
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
    }
  }

  resetQuiz () {
    const cards = [...this.state.cards];
    cards.forEach(card => {
      card.guess = "";
      card.correct = null
    });
    this.setState({cards: cards});
    this.shuffleCards();
    // TODO: refactor above lines render twice
  }

  renderCards() {
    return this.state.cards.map(card => {
      return (
        <Card key={card.name} name={card.name} imageLocation={card.image_url} guess={card.guess} correct={card.correct} onGuessChange={this.onGuessChange}></Card>
      )
    })
  }

  render() {
    return (
      <div className="quiz">
        <button onClick={this.validate}>Validate</button>
        <button onClick={this.shuffleCards}>Shuffle Order</button>
        <button onClick={this.resetQuiz}>Reset Quiz</button>

        { this.renderCards() }
      </div>
    );
  }
}

export default Quiz;