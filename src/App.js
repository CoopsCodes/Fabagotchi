import React, { Component } from "react";
import Tamagotchi from "./components/Tamagotchi";
import { FabProvider } from "./context";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fetchFab = async () => {
    const user = await axios.get("http://localhost:8000");
    this.setState({
      fab: user.data[0]
    });
  };

  updateFab = () => {
    const { name, hunger, age } = this.state.fab;
    this.setState({
      fab: {
        name,
        hunger: hunger + 1,
        age,
        alive: hunger >= 100 ? false : true
      }
    });
    if (!this.state.fab.alive) {
      clearInterval(this.state.intervalID);
    }
  };

  feed = () => {
    const { name, hunger, age } = this.state.fab;
    this.setState({
      fab: {
        name,
        hunger: hunger > 1 ? hunger - 2 : hunger,
        age,
        alive: hunger >= 100 ? false : true
      }
    });
  };

  componentDidMount = () => {
    this.fetchFab();
    const intervalID = setInterval(this.updateFab, 1000);
    this.setState({ intervalID, feed: this.feed });
  };

  render = () => {
    return (
      <FabProvider value={this.state}>
        <Tamagotchi />
      </FabProvider>
    );
  };
}

export default App;
