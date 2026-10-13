import React, {  useContext  } from "react";
import ProductCard from "./Components/ProductCard";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import { Myshop } from './context/MyEcom';

const App = () => {
  let{isCardOpen,products}=useContext(Myshop)

  return (
    <div className="h-screen p-4 w-full flex flex-col gap-4 cur">
      <h1>Hello............</h1>
      <Navbar />
      {isCardOpen ? (
        <div>
          <Card />
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-4">
          {products.map((el, index) => {
            return (
              <ProductCard
                product={el}
                key={index}
                className="cursor-pointer"
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
