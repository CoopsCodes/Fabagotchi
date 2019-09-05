import React, { Component } from "react";

export default class Tamagotchi extends Component {
  render() {
    return (
      <div>
        <h1>Feed me</h1>
        <div>
          <button onClick={this.feed}>-</button>
          <span>{this.props.hunger}</span>
        </div>
      </div>
    );
  }
}
