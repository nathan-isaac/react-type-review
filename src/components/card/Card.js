import React, { Component } from "react";

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
        <img src={this.props.imageLocation} alt="Type to guess"/>
        <label htmlFor="type-guess">Your guess</label>
      
        <input name="type-guess" type="text" value={this.props.guess} onChange={this.onGuessChange}/>
      </div>
    );
  }
}

export default Card;