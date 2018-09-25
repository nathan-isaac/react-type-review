import React, { Component } from "react";

class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {
      guess: '',
    }

    this.onGuessSubmit = this.onGuessSubmit.bind(this);
    this.onGuessChange = this.onGuessChange.bind(this);
  }

  onGuessChange(e) {
    e.preventDefault();
    this.setState({guess: e.target.value});
  }

  onGuessSubmit(e) {
    e.preventDefault();
    this.props.onGuessSubmit(this.state.guess);
  }

  render() {
    return (
      <div className="card">
        <h3>{this.props.name}</h3>              
        <img src={this.props.imageLocation} alt="Type to guess"/>
        <label htmlFor="type-guess">Your guess</label>
      
        <input name="type-guess" type="text" value={this.state.guess} onChange={this.onGuessChange}/>
        <button onClick={this.onGuessSubmit}>Disturb Me</button>
      </div>
    );
  }
}

export default Card;