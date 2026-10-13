import React, { useContext } from "react";
import { Myshop } from './../context/MyEcom';

const Card = () => {
  let {cardItems}=useContext(Myshop)
  console.log("from card items", cardItems);
  const total = cardItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 px-10 py-10">

      {/* Page Title */}
      <h1 className="mb-8 text-3xl font-bold text-gray-900">
        Shopping Cart ({cardItems.length})
      </h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

        {/* Cart Products */}
        <div className="space-y-5 lg:col-span-2">

          {cardItems.length === 0 ? (
            <div className="rounded-xl bg-white p-10 text-center shadow">
              <h2 className="text-xl font-semibold">
                Your cart is empty
              </h2>

              <p className="mt-2 text-gray-500">
                Add some products to your cart.
              </p>
            </div>
          ) : (
            cardItems.map((product) => (
              <div
                key={product.product_id}
                className="flex gap-5 rounded-xl bg-white p-5 shadow-md"
              >

                {/* Product Image */}
                <div className="h-28 w-28 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-1 flex-col">

                  <div className="flex justify-between">

                    <div>
                      <h2 className="text-lg font-bold text-gray-900">
                        {product.name}
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        {product.brand}
                      </p>
                    </div>

                    {/* Remove */}
                    <button className="text-sm text-red-500 hover:text-red-700">
                      Remove
                    </button>

                  </div>

                  {/* Description */}
                  <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="mt-2 text-sm">
                    <span className="text-yellow-500">
                      ★
                    </span>

                    <span className="ml-1 font-semibold">
                      {product.rating}
                    </span>

                    <span className="text-gray-400">
                      / 5
                    </span>
                  </div>

                  {/* Bottom */}
                  <div className="mt-auto flex items-end justify-between">

                    {/* Quantity */}
                    <div className="flex items-center gap-3">

                      <button className="h-8 w-8 rounded-md bg-gray-200 font-bold hover:bg-gray-300">
                        −
                      </button>

                      <span className="font-semibold">
                        1
                      </span>

                      <button className="h-8 w-8 rounded-md bg-gray-200 font-bold hover:bg-gray-300">
                        +
                      </button>

                    </div>

                    {/* Price */}
                    <p className="text-xl font-bold text-green-600">
                      ₹{product.price.toFixed(2)}
                    </p>

                  </div>

                </div>
              </div>
            ))
          )}

        </div>

        {/* Order Summary */}
        {cardItems.length > 0 && (
          <div className="h-fit rounded-xl bg-white p-6 shadow-md">

            <h2 className="mb-6 text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            {/* Subtotal */}
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">
                Subtotal
              </span>

              <span className="font-semibold">
                ₹{total.toFixed(2)}
              </span>
            </div>

            {/* Delivery */}
            <div className="mt-3 flex justify-between text-sm">
              <span className="text-gray-500">
                Delivery
              </span>

              <span className="font-semibold text-green-600">
                Free
              </span>
            </div>

            <div className="my-5 border-t"></div>

            {/* Total */}
            <div className="flex justify-between">
              <span className="text-lg font-bold">
                Total
              </span>

              <span className="text-lg font-bold">
                ₹{total.toFixed(2)}
              </span>
            </div>

            {/* Checkout */}
            <button className="mt-6 w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
              Checkout
            </button>

          </div>
        )}

      </div>
    </div>
  );
};

export default Card;