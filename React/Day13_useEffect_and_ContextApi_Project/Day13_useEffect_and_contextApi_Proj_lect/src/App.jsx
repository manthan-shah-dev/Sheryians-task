import React, { useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "./Componets/Navbar";
import ProductCarts from "./Componets/ProductCarts";
import Cartscreen from "./Pages/Cartscreen";
import { Mystore } from "./Context/MyProject";

const App = () => {
   let isInCard;
  const { isCardOpen, Cartitem, Products, setProducts } = useContext(Mystore);
  const getProductData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      console.log("Error in api", error);
    }
  };
  useEffect(() => {
    getProductData();
    console.log(Products);
  }, []);
  return (
    <div className="p-2 flex flex-col gap-4">
      <Navbar />

      {isCardOpen ? (
        <div className="">
          <Cartscreen />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-3">
          {Products.map((elm) => {
            isInCard=Cartitem.find((val)=> val.id=== elm.id)
       
            return <ProductCarts products={elm} key={elm.id} isInCard={isInCard} />;
          })}
        </div>
      )}
    </div>
  );
};

export default App;