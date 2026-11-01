import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const auth = createContext();

const ProductContext = ({ children }) => {
  const [Products, setProducts] = useState([]);

  const updateproduct = async () => {
 try  { const data = await axios.get(
      "https://fakestoreapi.com/products"
    );
    // console.log("Product data",data.data)

       setProducts(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    updateproduct();
  }, []);

  return (
    <auth.Provider value={{ Products, setProducts }}>
      {children}
    </auth.Provider>
  );
};

export default ProductContext;