import React, { useContext } from "react";
import FabContext from "../../context";

export default function Display() {
  const data = useContext(FabContext);
  const { fab } = data;
  if (fab) {
    return (
      <div>
        <p>Name: {fab.name}</p>
        <p>Age: {fab.age}</p>
        <p>Hunger: {fab.hunger}</p>
        { fab.alive ? <span role="img" aria-label="smiley">😎</span> : <span role="img" aria-label="smiley">💀</span> }
      </div>
    );
  } else {
    return (
      <p>Loading...</p>
    )
  }
}
