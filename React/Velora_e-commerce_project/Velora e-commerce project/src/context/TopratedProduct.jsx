import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Top = createContext();

const TopratedProduct = ({ children }) => {
  const [Products, setProducts] = useState([]);
  const [newProducts, setnewProducts] = useState([]);

  const updateproduct = async () => {
    try {
      const data = await axios.get("https://fakestoreapi.com/products");

      setProducts(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const newproduct = async () => {
    try {
     
        const data = await axios.get(
          "https://fakestoreapi.com/products?limit=5",
        );
      
      // console.log("new Products data", data.data);

      setnewProducts(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    updateproduct();
    newproduct();
  }, []);

  const [TopRated, setTopRated] = useState([]);
  useEffect(() => {
    const topRated = Products.filter((Product) => Product.rating?.rate != null)
      .toSorted((a, b) => b.rating.rate - a.rating.rate)
      .slice(0, 5);

    setTopRated(topRated);
  }, [Products]);

  return (
    <Top.Provider value={{ TopRated, newProducts }}>{children}</Top.Provider>
  );
};

export default TopratedProduct;
