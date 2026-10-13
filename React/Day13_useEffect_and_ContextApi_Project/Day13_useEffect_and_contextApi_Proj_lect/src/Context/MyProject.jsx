import { Children, createContext, useState } from "react";

export const Mystore = createContext();

export const ContextProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);
  const [isCardOpen, setisCardOpen] = useState(false);
  const [Cartitem, setCartitem] = useState([]);

  const incrementQuantity = (id) => {
    setCartitem((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
      });
    });
    console.log(Cartitem);
    console.log("from project", id);
  };
  const reduceQuantity = (id) => {
    setCartitem((prev) => {
      return prev
      .map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity - 1 } : val;
      });
    
    });
    console.log(Cartitem);
    console.log("from project", id);
    setCartitem((prev)=>{
      return   prev.filter((val)=> val.quantity >0)
    })
  };
  return (
    <Mystore.Provider
      value={{
        Products,
        setProducts,
        isCardOpen,
        setisCardOpen,
        Cartitem,
        setCartitem,
        incrementQuantity,
        reduceQuantity,
      }}
    >
      {children}
    </Mystore.Provider>
  );
};
