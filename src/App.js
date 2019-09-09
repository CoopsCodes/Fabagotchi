import React, { useState, useEffect } from "react";
import Tamagotchi from "./components/Tamagotchi";
// import "./App.css";
import { FabProvider } from "./context";
import axios from "axios";

// setTimeout(async () => {
//   const newFab = await callRulesApi(store.Fabagotchi)
//   saveGame(newFab)
//   store.Fabagotchi = newFab
// }, 30000)

const App = () => {
  const [fab, setFab] = useState({})

  useEffect(() => {
    async function fetchFab() {
      const user = await axios.get("http://localhost:8000");
      const fab = user.data[0];
      setFab(fab);
    }
    fetchFab();
  }, [])

  return (
    <FabProvider value={fab}>
      <Tamagotchi />
    </FabProvider>
  );
}

export default App;
