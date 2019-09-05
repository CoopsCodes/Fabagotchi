import React from "react";
import Tamagotchi from "./components/Tamagotchi";
import "./App.css";
import { FabProvider } from "./context";
// import axios from "axios";

// setTimeout(async () => {
//   const newFab = await callRulesApi(store.Fabagotchi)
//   saveGame(newFab)
//   store.Fabagotchi = newFab
// }, 30000)

function App() {
  const user = { name: "CAndy", age: 19, hunger: 100, alive: true };

  return (
    <FabProvider value={user}>
      <Tamagotchi />
    </FabProvider>
  );
}

export default App;
