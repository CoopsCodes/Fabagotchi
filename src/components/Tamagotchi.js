import React, { Component } from "react";
import { connect } from "react-redux";

class Tamagotchi extends Component {
  feed = () => {
    this.props.dispatch({ type: "HUNGER" });
  };

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

const mapStateToProps = state => ({
  hunger: state.hunger
});

export default connect(mapStateToProps)(Tamagotchi);
