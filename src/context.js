import React from "react";

const FabContext = React.createContext({});

export const FabProvider = FabContext.Provider;
export const FabConsumer = FabContext.Consumer;
export default FabContext;
