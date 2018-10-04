import React, { Component } from "react";
import "./Card.css";

class Card extends Component {

  constructor(props) {
    super(props);
    this.onGuessChange = this.onGuessChange.bind(this);
  }

  onGuessChange(e) {
    this.props.onGuessChange({
      name: this.props.name,
      guess: e.target.value
    });
  }

  render() {
    return (
      <div className="card">              
        <div>{ this.props.correct ? '' : 'incorrect' }</div>
        <img src={this.props.imageLocation} alt="Type to guess"/>
        <input name="type-guess" type="text" value={this.props.guess} onChange={this.onGuessChange}/>
      </div>
    );
  }
}

export default Card;