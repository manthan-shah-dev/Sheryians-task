import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { auth } from "./ProductContext";

export const cat = createContext();

const CategoryContext = ({ children }) => {
  const [categories, setcategories] = useState([]);
  const { Products } = useContext(auth);
  const icons = {
    electronics: <span className="text-3xl">💻</span>,
    jewelery: <span className="text-3xl">💍</span>,
    "men's clothing": <span className="text-3xl">👔</span>,
    "women's clothing": <span className="text-3xl">👗</span>,

    watches: <span className="text-3xl">⌚</span>,
    headphones: <span className="text-3xl">🎧</span>,
    shoes: <span className="text-3xl">👟</span>,
    mobiles: <span className="text-3xl">📱</span>,
    gaming: <span className="text-3xl">🎮</span>,
    bags: <span className="text-3xl">👜</span>,
    clothes: <span className="text-3xl">👕</span>,
    furniture: <span className="text-3xl">🛋️</span>,
    miscellaneous: <span className="text-3xl">📦</span>,
    package: <span className="text-3xl">📦</span>,
  };
  const updateproduct = async () => {
    try {
      const data = await axios.get(
        "https://fakestoreapi.com/products/categories",
      );

      // console.log("categories", data.data);
      setcategories(data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    if (!categories || categories.length === 0) return;

    setcategories((prevCategories) =>
      prevCategories.map((category) => {
        const categoryName =
          typeof category === "string" ? category : category.category;

        const count = Products.filter(
          (product) =>
            product.category?.toLowerCase() === categoryName?.toLowerCase(),
        ).length;

        return {
          category: categoryName,
          count,
          categoryIcon: icons[categoryName],
        };
      }),
    );
  }, [Products]);

  useEffect(() => {
    updateproduct();
    console.log("Fetching products...");
  }, []);

  return (
    <cat.Provider value={{ categories, setcategories }}>
      {children}
    </cat.Provider>
  );
};

export default CategoryContext;
