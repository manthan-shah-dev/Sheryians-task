import React, { useContext, useEffect } from "react";
import { cat } from "./CategoryContext";
import { auth } from "./ProductContext";

const Countcontext = () => {
  const { categories, setcategories } = useContext(cat);
 

  return <div></div>;
};

export default Countcontext;
