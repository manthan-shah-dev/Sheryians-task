import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCart from "../Components/ProductCart";
import { Axoisinstance } from "../config/axoisinstance";

const ProductPage = () => {
  const [ProductsData, setProductsData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  let getProductsData = async () => {
    try {
      let product = await Axoisinstance.get('/products')
      console.log("product data", product.data);
      setProductsData(product.data);
      setisLoading(false);
    } catch (error) {
      console.log("error is product api", error);
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);
  if (isLoading)
    return <h1 className="text-4xl text-green-500">Loading Products</h1>;
  console.log("ProductsData", ProductsData);
  return (
    <div>
      Product Page
      <div className="grid gap-5 lg:grid-cols-4 sm:grid-cols-2">
        {ProductsData.map((val) => (
          <ProductCart product={val} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
