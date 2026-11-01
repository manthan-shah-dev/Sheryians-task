import { createContext, useContext, useEffect, useState } from "react";
import { login } from "./Login"; // Change path/name according to your project

export const user = createContext();

const UserCart = ({ children }) => {
  const { detail } = useContext(login);

  // Store all users' carts
  const [allCarts, setAllCarts] = useState(
    JSON.parse(localStorage.getItem("allCarts")) || {},
  );

  const email = detail?.emailform;

  // Get only the logged-in user's products
  const products = email ? allCarts[email] || [] : [];

  // Calculate current user's total price
  const totalprice = products.reduce(
    (prev, val) => prev + (val.totalprice ?? 0),
    0,
  );

  // Save all users' carts
  useEffect(() => {
    localStorage.setItem("allCarts", JSON.stringify(allCarts));
  }, [allCarts]);

  // Update current user's cart
  const setfirstproducts = (updatedProducts) => {
    if (!email) return;

    setAllCarts((prev) => ({
      ...prev,
      [email]:
        typeof updatedProducts === "function"
          ? updatedProducts(prev[email] || [])
          : updatedProducts,
    }));
  };

  return (
    <user.Provider
      value={{
        products,
        setfirstproducts,
        totalprice: Number(totalprice.toFixed(2)),
      }}
    >
      {children}
    </user.Provider>
  );
};

export default UserCart;
