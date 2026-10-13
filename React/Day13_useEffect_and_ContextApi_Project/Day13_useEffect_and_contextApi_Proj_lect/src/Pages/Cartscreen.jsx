import React ,{useContext} from "react";
import CartCard from "../Componets/CartCard";
import { Mystore } from "../Context/MyProject";

const Cartscreen = () => {
  const {Cartitem} = useContext(Mystore)
  console.log(Cartitem)
  return (
    <div className="h-90% text-6xl">
    {
      Cartitem && Cartitem.length >0 ?
      <div className="grid grid-cols-2 gap-2 "> 
         { Cartitem.map((el, id) => (
            <CartCard product={el} key={id} className="border border-black" />
          ))} 
      </div>
          
    
    :
    <h1>This is from cart </h1>
      }
    </div>
  );
};

export default Cartscreen;
