import {
  Box,
  BoxIcon,
  CardSim,
  Laptop,
  LineChart,
  MoveRight,
  Package,
  Shield,
  ShoppingBag,
  Star,
  Tag,
  TrendingUp,
  Zap,
} from "lucide-react";
import React, { useContext, useEffect } from "react";
import { cat } from "../context/CategoryContext";
import { auth } from "../context/ProductContext";
import { NavLink } from "react-router";
import { Top } from "../context/TopratedProduct";
import Cart from "./Cart";
const Footer2 = () => {
  const { categories } = useContext(cat);
  const { TopRated, newProducts } = useContext(Top);
  const { Products, } = useContext(auth);

  
  useEffect(() => {
    console.log("Updated TopRated:", TopRated);
  }, [TopRated]);
  return (
    <div className="bg-[#050817]">
      <div className="mx-4 grid grid-cols-2 gap-3 rounded-2xl border border-[#27233C] bg-[#0D1020] p-4 sm:mx-6 sm:grid-cols-3 lg:mx-10 lg:grid-cols-4">
        {categories.map((category, ind) => (
          <div
            key={ind}
            className="flex flex-col items-center justify-center rounded-2xl bg-white px-2  text-center text-[#050817] transition hover:-translate-y-1 py-4"
          >
            <div className="text-3xl"> {category.categoryIcon}</div>
            <h3 className="mt-3 font-semibold">{category.category}</h3>
            <p className="mt-1 text-sm text-gray-500">
              {category.count ?? 0} items
            </p>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 gap-4 bg-[#050817] p-3 sm:p-5 lg:grid-cols-2 lg:gap-6">
        {/* Top Rated */}
        <div className="p-5 bg-[#050817] text-[#C4B4FF] gap-2 flex  flex-col ">
          <div className="py-6 rounded-2xl border border-[#182B50] bg-[#0D1020] p-4">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 font-semibold text-[#C4B4FF]">
                <Star className="fill-amber-400 text-[#BFFF00]" />
                Top Rated
              </h2>

              <button className="cursor-pointer flex items-center gap-2 text-sm text-[#7c3aed] transition hover:text-[#C4B4FF]">
                <NavLink to="/shop">See all</NavLink>
                <MoveRight size={18} />
              </button>
            </div>
          </div>

          {TopRated.map((product) => (
            <div
              key={product.id}
              className="cursor-pointer flex items-center justify-between gap-3 rounded-2xl border border-[#182B50] bg-[#050817] p-3 sm:p-4"
            >
              <div className="w-30 h-30">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-[#C4B4FF]">{product.title}</h3>
                <p className="mt-1 font-medium text-[#C8F75A]">
                  ${product.price}
                </p>
              </div>

              <button className="cursor-pointer hover:text-[#C4B4FF] text-[#7c3aed]  shrink-0 rounded-xl bg-[#C4B4FF]/10 p-2 ">
                <ShoppingBag size={18} />
              </button>
            </div>
          ))}
        </div>
        {/* new Arrivals */}
        <div className="p-5  bg-[#050817] text-[#C4B4FF] gap-2 flex  flex-col ">
          <div className="py-6 rounded-2xl border border-[#182B50] bg-[#0D1020] p-4">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 font-semibold text-[#C4B4FF]">
                <Zap className="fill-amber-400 text-[#BFFF00]" />
                New Arrivals
              </h2>

              <button className="cursor-pointer flex items-center gap-2 text-sm text-[#7c3aed] transition hover:text-[#C4B4FF]">
                <NavLink to="/shop">See all</NavLink>

                <MoveRight size={18} />
              </button>
            </div>
          </div>
          {newProducts.map((product) => (
            <div key={product.id} className="cursor-pointer flex items-center justify-between gap-3 rounded-2xl border border-[#182B50] bg-[#050817] p-3 sm:p-4">
             <div className="w-30 h-30">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-[#C4B4FF]">{product.title}</h3>
                <p className="mt-1 font-medium text-[#C8F75A]">
                  {" "}
                  ${product.price}
                </p>
              </div>

              <button className="cursor-pointer hover:text-[#C4B4FF] text-[#7c3aed]  shrink-0 rounded-xl bg-[#C4B4FF]/10 p-2 ">
                <ShoppingBag size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* below */}
      <div className=" grid grid-cols-3 gap-6  xl:grid-cols-3 bg-[#050817] text-[#F8FAFC] p-6">
        <div className="flex items-center gap-4 rounded-2xl border border-[#27233C] bg-[#0D1020] p-6">
          <div>
            <Zap
              size={40}
              strokeWidth={2.2}
              className="rounded-xl bg-[#17243B] p-2 text-[#60A5FA]"
            />
          </div>
          <div>
            <h2 className="text-base font-medium text-[#C4B4FF]">
              Fast Delivery{" "}
            </h2>
            <p className="text-sm text-[#94A3B8]">Same-day on select items</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-[#27233C] bg-[#0D1020] p-6">
          <div>
            <Shield
              size={40}
              strokeWidth={2.2}
              className="rounded-xl bg-[#29200F] p-2 text-[#FBBF24]"
            />
          </div>
          <div>
            <h2 className="text-base font-medium text-[#C4B4FF]">
              {" "}
              Secure Payments
            </h2>
            <p className="text-sm text-[#94A3B8]">100% encrypted checkout</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-[#27233C] bg-[#0D1020] p-6">
          <div>
            <Tag
              size={40}
              strokeWidth={2.2}
              className="rounded-xl bg-[#261A35] p-2 text-[#C4B4FF]"
            />
          </div>
          <div>
            <h2 className="text-base font-medium text-[#C4B4FF]">
              Best Prices
            </h2>
            <p className="text-sm text-[#94A3B8]"> Price-match guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
