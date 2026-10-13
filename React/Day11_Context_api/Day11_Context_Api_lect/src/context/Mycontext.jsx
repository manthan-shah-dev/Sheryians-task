import { createContext, useState } from "react";

// setup out blank Store----
export const Mystore = createContext();

// make a provider of our store who handle data
// and serves to the customers;

export const ContextProvider = ({ children }) => {
    const [Centralvalue, setCentralvalue] = useState("me Context se hu");
    console.log(setCentralvalue)
  return (
    <Mystore.Provider value={ Centralvalue }>
      {children}
    </Mystore.Provider>
  );
};
