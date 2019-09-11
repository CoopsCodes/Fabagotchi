import React, { Component } from "react";
import Buttons from "./Buttons";
import Display from "./Display";

export default class Tamagotchi extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Fabagotchi</h1>
        <div>
          <Display />
          <Buttons />
        </div>
      </div>
    );
  }
}
