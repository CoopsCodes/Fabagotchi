import React, { Component } from "react";
import Buttons from "./Buttons";
import Display from "./Display";
import "../App.css";

export default class Fabagotchi extends Component {
  render() {
    return (
      <div className="FabagotchiContainer">
        <div className="FabagotchiViewport">
          <h1>Welcome to Fabagotchi</h1>
          <div className="Display">
            <Display />
          </div>
          <div className="Buttons">
            <Buttons />
          </div>
        </div>
      </div>
    );
  }
}
