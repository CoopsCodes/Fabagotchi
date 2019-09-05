import React from "react";
import Tamagotchi from "./components/Tamagotchi";
import "./App.css";
import { FabProvider } from "./context";
import axios from "axios";

// setTimeout(async () => {
//   const newFab = await callRulesApi(store.Fabagotchi)
//   saveGame(newFab)
//   store.Fabagotchi = newFab
// }, 30000)

async function App() {
  const user = await axios.get("http://localhost:8000");
  const fabo = user.data[0];
  console.log(fabo);

  return (
    <FabProvider value={fabo}>
      <Tamagotchi />
    </FabProvider>
  );
}

export default App;
