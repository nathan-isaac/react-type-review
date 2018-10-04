import React, { Component } from 'react';
import Card from '../card/Card';
import jsonData from "../../source-data.js";

class Quiz extends Component {
  constructor(props) {
    super(props);


    const cards = jsonData.map((card, index) => {
      return {
        id: index,
        name: card.name,
        image_url: card.img,
        guess: '',
      }
    });

    this.state = {
      score: 0,
      mode: "flashcard",
      namesHidden: true,
      cards: cards,
    }

    this.onGuessChange = this.onGuessChange.bind(this);
  }    

  onGuessChange({name, guess}) {
    const cards = [...this.state.cards];

    const card = cards.find(card => {
      return card.name === name;
    });

    card.guess = guess;

    this.setState({cards: cards});
  }

  renderCards() {
    return this.state.cards.map(card => {
      return (
        <Card key={card.name} name={card.name} imageLocation={card.image_url} guess={card.guess} onGuessChange={this.onGuessChange}></Card>
      )
    })
  }

  render() {
    return (
      <div className="quiz">
        { this.renderCards() }
      </div>
    );
  }
}

export default Quiz;