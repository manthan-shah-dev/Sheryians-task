import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CategoriesDataContext = createContext();

const Categoriesdata = ({ children }) => {
  const [categoriesselect, setcategoriesselect] = useState("");
  const [priceSelect, setpriceSelect] = useState("");
  const [Topratedselect, setTopratedselect] = useState("");
  const [Productsc, setProductsc] = useState([]);
  const topratedproduct = (products) => {
    if (Topratedselect === "true") {
      const topRated = products
        .filter((Product) => Product.rating?.rate != null)
        .toSorted((a, b) => b.rating.rate - a.rating.rate)
        .slice(0, 20);

      setProductsc(topRated);
      console.log("topRated", topRated);
    } else {
      const topRated = products
        .filter((Product) => Product.rating?.rate != null)
        .toSorted((a, b) => a.rating.rate - b.rating.rate)
        .slice(0, 20);

      setProductsc(topRated);
      console.log("Low Rated", topRated);
    }
  };


const updatedate = (data) => {
  let products = [...data.data];

  if (priceSelect === "asc") {
    products.sort((a, b) => a.price - b.price);
  } else if (priceSelect === "desc") {
    products.sort((a, b) => b.price - a.price);
  } else if (Topratedselect === "true") {
    products.sort(
      (a, b) => (b.rating?.rate ?? 0) - (a.rating?.rate ?? 0)
    );
  } else if (Topratedselect === "false") {
    products.sort(
      (a, b) => (a.rating?.rate ?? 0) - (b.rating?.rate ?? 0)
    );
  }

  setProductsc(products);
};

const updateproduct = async () => {
  try {
    let url = "https://fakestoreapi.com/products";

    if (categoriesselect !== "") {
      url += `/category/${encodeURIComponent(categoriesselect)}`;
    }

    if (priceSelect !== "") {
      url += `?sort=${priceSelect}`;
    }

    const data = await axios.get(url);

    updatedate(data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

  useEffect(() => {
    // console.log("priceSelect:", priceSelect);

    updateproduct();

    // console.log("Fetching products...");
  }, [categoriesselect, priceSelect, Topratedselect]);

  return (
    <CategoriesDataContext.Provider
      value={{
        categoriesselect,
        setpriceSelect,
        Productsc,
        Topratedselect,
        setTopratedselect,
        setcategoriesselect,
      }}
    >
      {children}
    </CategoriesDataContext.Provider>
  );
};

export default Categoriesdata;
