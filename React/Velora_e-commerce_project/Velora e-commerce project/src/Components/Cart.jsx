import React, { useContext, useState } from "react";
import {
  ShoppingBag,
  X,
  PackageOpen,
  Trash2,
  Minus,
  Plus,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router";
import { user } from "../context/UserCart";
import { login } from "../context/Login";
import { toast } from "react-toastify";

const Cart = ({ isCartOpen }) => {
  const cartclose = () => {
    isCartOpen(false);
  };
  const { products, setfirstproducts, totalprice, settotalprice } =
    useContext(user);


    const checkout=(val)=>{
    setfirstproducts([]);
toast.success(
  val ? "Order placed successfully!" : "Cart cleared successfully!"
);
    }

  const inupdatecount = (product) => {
    const newproduct = products.map((val) =>
      val.id === product.id
        ? {
            ...val,
            quantity: val.quantity + 1,
            totalprice: val.price * (val.quantity + 1),
          }
        : val,
    );
    setfirstproducts(newproduct);
    console.log(newproduct);
  };
  const deupdatecount = (product) => {
    const newproduct = products.map((val) =>
      val.id === product.id
        ? {
            ...val,
            quantity: val.quantity - 1,
            totalprice: val.totalprice - val.price,
          }
        : val,
    );
    const deleteproducts = newproduct.filter((val) => val.quantity > 0);

    setfirstproducts(deleteproducts);
    console.log(deleteproducts);
  };
  const removeproduct = (id) => {
    const deleteproducts = products.filter((val) => id !== val.id);
    console.log("deleteproducts", deleteproducts);
    setfirstproducts(deleteproducts);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Background Overlay */}
      <div
        onClick={cartclose}
        className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
      />

      {/* Cart Drawer */}
      <div className="relative flex h-full w-full flex-col border-l border-[#27233C] bg-[#080B14] text-slate-50 sm:w-[85%] md:w-[420px] lg:w-[400px]">
        {/* Header */}
        <div className="flex h-[62px] shrink-0 items-center justify-between border-b border-[#27233C] px-4">
          <div className="flex items-center gap-3">
            <ShoppingBag size={21} strokeWidth={2} className="text-[#C4B4FF]" />

            <h2 className="text-lg font-semibold tracking-wide">
              Shopping Cart
            </h2>
          </div>

          <button
            onClick={cartclose}
            type="button"
            aria-label="Close cart"
            className="cursor-pointer text-slate-400 transition-colors hover:text-[#C4B4FF]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Products */}
        {products.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
            <div className="mb-4 flex h-[80px] w-[80px] items-center justify-center rounded-2xl border border-[#27233C] bg-[#0D1020]">
              <PackageOpen
                size={35}
                strokeWidth={1.8}
                className="text-[#C4B4FF]/50"
              />
            </div>

            <h3 className="mb-2 text-lg font-semibold text-slate-100">
              Cart is empty
            </h3>

            <p className="mb-6 text-sm text-slate-400">
              Go shop something cool!
            </p>

            <NavLink
              to="/shop"
              onClick={cartclose}
              className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20"
            >
              Browse Products
            </NavLink>
          </div>
        ) : (
          <>
            {/* Product List */}
            <div className="flex-1 space-y-3 overflow-y-auto p-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-3 rounded-xl border border-[#27233C] bg-[#0D1020] p-3"
                >
                  {/* Product Image */}
                  <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#27233C] bg-white p-1.5">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="min-w-0 flex-1">
                    <h3 className="line-clamp-2 text-xs font-medium leading-5 text-slate-100">
                      {product.title}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-[#C4B4FF]">
                      ₹{product.totalprice.toLocaleString("en-IN")}
                    </p>

                    <p className="text-[10px] text-slate-500">
                      ₹{product.price.toLocaleString("en-IN")} each
                    </p>

                    {/* Quantity UI */}
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => deupdatecount(product)}
                        type="button"
                        aria-label="Decrease quantity"
                        className="rounded-lg border border-[#27233C] bg-[#111827] p-1.5 text-slate-300 transition hover:border-[#C4B4FF] hover:text-[#C4B4FF]"
                      >
                        <Minus size={12} />
                      </button>

                      <span className="min-w-3 text-center text-xs font-medium text-slate-100">
                        {product.quantity}
                      </span>

                      <button
                        onClick={() => inupdatecount(product)}
                        type="button"
                        aria-label="Increase quantity"
                        className="rounded-lg border border-[#27233C] bg-[#111827] p-1.5 text-slate-300 transition hover:border-[#C4B4FF] hover:text-[#C4B4FF]"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Delete Icon UI */}
                  <button
                    onClick={() => removeproduct(product.id)}
                    type="button"
                    aria-label="Remove product"
                    className="shrink-0 rounded-lg p-1.5 text-red-400 transition hover:bg-red-400/10 hover:text-red-300"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="shrink-0 border-t border-[#27233C] bg-[#0D1020] p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm text-slate-400">Total</span>

                <span className="text-lg font-semibold text-[#C4B4FF]">
                  $ {totalprice}
                </span>
              </div>

              {/* Checkout Button UI */}
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20"
            onClick={()=>checkout(true)}
       
            >
                Checkout
                <ArrowRight size={17} />
              </button>

              {/* Clear Cart Button UI */}
              <button
                type="button"
                className="mt-3 w-full text-xs text-slate-500 transition hover:text-red-400"
                       onClick={()=>checkout(false)}

           
           >
                Clear cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
