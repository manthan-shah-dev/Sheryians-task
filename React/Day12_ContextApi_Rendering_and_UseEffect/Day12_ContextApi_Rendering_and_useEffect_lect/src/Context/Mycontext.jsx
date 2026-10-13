import { Children, createContext, useState } from "react";

//Consumer
export const Mystore = createContext();

// Provider
export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <Mystore.Provider value={{ count, setCount }}>{children}</Mystore.Provider>
  );
};
