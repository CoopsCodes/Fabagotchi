import React, { useState, useEffect } from "react";
import Tamagotchi from "./components/Tamagotchi";
// import "./App.css";
import { FabProvider } from "./context";
import axios from "axios";
import applyRules from "./utils/applyRules";

// setTimeout(async () => {
//   const newFab = await callRulesApi(store.Fabagotchi)
//   saveGame(newFab)
//   store.Fabagotchi = newFab
// }, 30000)

const App = () => {
  const [fab, setFab] = useState({});

  useEffect(() => {
    async function fetchFab() {
      console.log("fetching");
      const user = await axios.get("http://localhost:8000");
      const fab = user.data[0];
      console.log("interval", fab);
      setFab(fab);
    }
    fetchFab();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFab(
        Object.assign({}, fab, {
          hunger: fab.hunger + 1
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <FabProvider value={fab}>
      <Tamagotchi />
    </FabProvider>
  );
};

export default App;
