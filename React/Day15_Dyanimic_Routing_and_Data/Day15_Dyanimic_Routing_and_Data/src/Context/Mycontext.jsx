import {  createContext, useState } from "react";

export const Mystore = createContext();

export const ContextProvider = ({ children }) => {
  const [productsData, setproductsData] = useState([]);
  return (
    <Mystore.Provider value={{ productsData, setproductsData }}>
      {children}
    </Mystore.Provider>
  );
};
