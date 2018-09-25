import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h3>{this.props.name}</h3>              
        <img src={this.props.imageLocation} alt="Type to guess"/>
        <label htmlFor="type-guess">Your guess</label>
        <input name="type-guess" type="text"/>
      </div>
    );
  }
}

export default Card;