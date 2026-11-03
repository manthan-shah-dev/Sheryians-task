import { createContext, useContext, useEffect, useState } from "react";
import { login } from "./Login"; // Change path/name according to your project

export const user = createContext();

const UserCart = ({ children }) => {
  const { detail } = useContext(login);
  const [allCarts, setAllCarts] = useState(
    JSON.parse(localStorage.getItem("allCarts")) || {},
  );

  const email = detail?.emailform;

  const products = email ? allCarts[email] || [] : [];

  let totalproducts = products.length;
  // Calculate current user's total price
  const totalprice = products.reduce(
    (prev, val) => prev + (val.totalprice ?? 0),
    0,
  );

  useEffect(() => {
    localStorage.setItem("allCarts", JSON.stringify(allCarts));
  }, [allCarts]);
  console.log("totalproducts", totalproducts);
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
        totalproducts,
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
