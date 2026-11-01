import { ArrowBigDown, MoveRight } from "lucide-react";
import React from "react";
import Footer from "../Components/Footer";
import Footer2 from "../Components/Footer2";

const Home = () => {
  return (
    <div>
      <div className="bg-black mx-auto p-10 flex gap-5 font-['Clash_Display',Syne,sans-serif] w-[80%] items-center border border-[#7b7c5c] rounded-2xl h-[70%] justify-between">
        <div className=" flex flex-col gap-2  ">
          <h4 className="text-[#7C3AED]">Good Evening</h4>
          <h1 className=" text-[36px] leading-[40px] font-bold   text-[#F9FAFB]">
            Welcome back,
          </h1>
          <h1 className=" text-[36px] leading-[40px] font-bold   text-[#7C3AED]">
            MANTHAN!
          </h1>

          <p className="text-[#90a1aa]">
            Discover today's picks — hand-curated products across
            <br />
            electronics, fashion, and more.
          </p>
          <div className="flex gap-2">
            <button className="p-2.5 bg-[#c4b4ff] rounded-2xl flex gap-1.5 items-center font-semibold cursor-pointer ">
              Shop Now!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <button className="flex items-center gap-1.5 rounded-2xl border border-[#939393] p-2.5 font-semibold text-[#90a1aa] outline-none transition-colors duration-300 hover:border-[#F9FAFB] hover:text-[#F9FAFB] cursor-pointer">
              View All Products
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#23280f] border border-[#44510c] p-3 rounded-2xl flex flex-col items-center">
            <h1 className=" text-[36px] leading-[40px] font-bold text-[#c4b4ff]">
              20+
            </h1>
            <h1 className="text-[#7b7c5c]">Products Available</h1>
          </div>
          <div className="bg--transparent border border-[#e5e7eb] p-3 rounded-2xl flex flex-col items-center">
            <h1 className=" text-[36px] leading-[40px] font-bold   text-[#F9FAFB]">
              Free
            </h1>
            <h1 className="text-[#7b7c5c]">Delivery on ₹999+</h1>
          </div>
        </div>
      </div>

      <Footer />
      <Footer2 />
    </div>
  );
};

export default Home;
