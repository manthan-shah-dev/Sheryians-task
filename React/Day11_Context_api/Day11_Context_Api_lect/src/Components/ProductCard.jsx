import React, { useContext } from "react";
import { Myshop } from "../context/MyEcom";

const ProductCard = ({ product }) => {
  let { setCardItems } = useContext(Myshop);
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;
  const handleadd = () => {
    setCardItems((prev) => [...prev, product]);
  };
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center bg-gray-100 ">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />

        {/* Discount Badge */}
        {product.discount > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
            {product.discount}% OFF
          </span>
        )}

        {/* Availability */}
        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${
            product.availability
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {product.availability ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <p className="mb-1 text-sm font-medium text-blue-600">
          {product.category}
        </p>

        {/* Product Name */}
        <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>

        {/* Brand */}
        <p className="mt-1 text-sm text-gray-500">Brand: {product.brand}</p>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-yellow-500">★</span>

          <span className="font-semibold text-gray-800">{product.rating}</span>

          <span className="text-sm text-gray-400">/ 5</span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-bold text-gray-900">
            ₹{discountedPrice.toFixed(2)}
          </span>

          {product.discount > 0 && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Unit */}
        <p className="mt-1 text-sm text-gray-500">Per {product.unit}</p>

        {/* Button */}
        <button
          disabled={!product.availability}
          className={`mt-5 w-full rounded-xl px-4 py-3 font-semibold transition cursor-pointer ${
            product.availability
              ? "bg-black text-white hover:bg-gray-800"
              : "cursor-not-allowed bg-gray-300 text-gray-500"
          }`}
          onClick={handleadd}
        >
          {product.availability ? "Add to Cart" : "Unavailable"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
