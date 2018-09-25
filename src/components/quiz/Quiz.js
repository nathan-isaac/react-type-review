import React, { Component } from 'react';
import Card from '../card/Card';
import jsonData from "../../source-data.js";

class Quiz extends Component {
  constructor(props) {
    super(props);

    const cards = jsonData.map(card => {
      return {
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
  }    

  onGuessSubmit(text) {
    console.log("check this as an answer", text);
    // const cards = this.state.cards;

    // cards[index].guess = guess;

    // this.setState({cards: cards})
  }

  renderCards() {
    return this.state.cards.map(card => {
      return (
        <Card key={card.name} name={card.name} imageLocation={card.img} guess={card.guess} onGuessSubmit={this.onGuessSubmit}></Card>
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