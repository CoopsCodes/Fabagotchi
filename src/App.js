import React from "react";
import Tamagotchi from "./Tamagotchi";
import "./App.css";
import axios from 'axios';

// setTimeout(async () => {
//   const newFab = await callRulesApi(store.Fabagotchi)
//   saveGame(newFab)
//   store.Fabagotchi = newFab
// }, 30000)

function App() {
  return <Tamagotchi />;
}

export default App;
