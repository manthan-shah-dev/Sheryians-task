import React from "react";
import { Minus, Plus, Trash2, Heading1 } from "lucide-react";
import { useNavigate } from "react-router";

const ProductCarts = ({ product }) => {
  // const addToCard = () => {
  //   setCartitem((prev) => [...prev, { ...product, quantity: 1 }]);
  //   alert("Product Add Into Card");
  // };
  let navigate=useNavigate()
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* product Image */}
      <div onClick={()=> navigate(`/detail/${product.id}`)} className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold capitalize text-blue-700">
          {product.category}
        </span>
      </div>

      {/* product Details */}
      <div className="p-5">
        {/* Rating */}
        <div className="mb-3 flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-800">
            ★ {product.rating.rate}
          </span>

          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* product Title */}
        <h2 className="mb-2 line-clamp-2 min-h-12 text-lg font-bold text-gray-900">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mb-5 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Price and Button */}
        <div className="flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-500">Price</p>
            <p className="text-2xl font-extrabold text-gray-900">
              ₹{(product.price * 10).toFixed(2)}
            </p>
          </div>

        
          
            <button
              // onClick={addToCard}
              className="rounded-xl cursor-pointer bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95"
            >
              + Add to Cart
            </button>
          
        </div>
      </div>
    </div>
  );
};

export default ProductCarts;
