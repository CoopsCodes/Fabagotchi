import React, { useContext } from "react";
import FabContext from "../../context";

export default function Display() {
  const fab = useContext(FabContext);
  console.log(fab);
  return (
    <div>
      <p>Name: {fab.name}</p>
      <p>Age: {fab.age}</p>
      <p>Hunger: {fab.hunger}</p>
      {fab.alive ? <p>😎</p> : <p>💀</p>}
    </div>
  );
}
