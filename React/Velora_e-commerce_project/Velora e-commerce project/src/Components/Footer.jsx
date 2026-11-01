import { Package, Star, Tag, TrendingUp } from "lucide-react";
import React, { useContext } from "react";
import { user } from "../context/userCart";

const Footer = () => {
  const {totalprice}=  useContext(user);
  
  return (
    <div>
      <div className=" grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 bg-[#050817] text-[#F8FAFC] p-6">
        <div className="flex items-center gap-4 rounded-2xl border border-[#27233C] bg-[#0D1020] p-6">
          <div>
            <Package
              size={40}
              strokeWidth={2.2}
              className="rounded-xl bg-[#C4B4FF] p-2 text-[#261A35]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold text-[#F8FAFC]">0</h1>
            <h2 className="text-base font-medium text-[#C4B4FF]">Cart Items</h2>
            <p className="text-sm text-[#94A3B8]">In your bag</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-[#27233C] bg-[#0D1020] p-6">
          <div>
            <TrendingUp
              size={40}
              strokeWidth={2.2}
              className="rounded-xl bg-[#17243B] p-2 text-[#60A5FA]"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#F8FAFC]">${totalprice}</h1>
            <h2 className="text-base font-medium text-[#C4B4FF]">Cart Value</h2>
            <p className="text-sm text-[#94A3B8]">Ready to checkout</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-[#27233C] bg-[#0D1020] p-6">
          <div>
            <Star
              size={40}
              strokeWidth={2.2}
              className="rounded-xl bg-[#29200F] p-2 text-[#FBBF24]"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#F8FAFC]">5</h1>
            <h2 className="text-base font-medium text-[#C4B4FF]">Top Products</h2>
            <p className="text-sm text-[#94A3B8]">Highly rated</p>
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
            <h1 className="text-2xl font-bold text-[#F8FAFC]">6</h1>
            <h2 className="text-base font-medium text-[#C4B4FF]">Categories</h2>
            <p className="text-sm text-[#94A3B8]">To explore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
