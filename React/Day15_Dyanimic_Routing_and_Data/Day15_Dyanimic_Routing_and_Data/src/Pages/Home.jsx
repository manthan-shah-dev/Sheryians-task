import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Mystore } from "../Context/Mycontext";
import ProductCard from "./ProductsCard";
const Home = () => {
  let { productsData, setproductsData } = useContext(Mystore);
  let getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setproductsData(res.data);
    } catch (err) {
      console.log("error in api", err);
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);
  // console.log(productsData);

  return (
    <div className="grid grid-cols-4 gap-3 p-4">
      {
      productsData.map((val) => {
        return <ProductCard product={val} key={val.id} />;
      })}
    </div>
  );
};

export default Home;
