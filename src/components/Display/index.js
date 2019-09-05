import React, { useContext } from "react";
import FabContext from "../../context";

export default function Display() {
  const user = useContext(FabContext);
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.hunger}</p>
      <p>{user.alive}</p>
    </div>
  );
}
