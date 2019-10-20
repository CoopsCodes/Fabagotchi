import React, { useContext } from "react";
import FabContext from "../../context";

export default function Ok() {
  const data = useContext(FabContext);
  const { feed } = data;

  return <button onClick={ feed }>Ok</button>;
}
