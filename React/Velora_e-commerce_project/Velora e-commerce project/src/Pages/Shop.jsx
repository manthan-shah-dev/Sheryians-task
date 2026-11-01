import React, { useContext, useEffect, useState } from "react";
import { Heart, Search, ShoppingCart, Star, X } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { auth } from "../context/ProductContext";
import { cat } from "../context/CategoryContext";
import { CategoriesDataContext } from "../context/Categoriesdata";
import { user } from "../context/UserCart";
import { Navigate, useNavigate } from "react-router";
import { login } from "../context/Login";
const Shop = () => {

  const Navigate = useNavigate();
  const { Products } = useContext(auth);
  const { categories } = useContext(cat);
  const {
    Productsc,
    setTopratedselect,
    Topratedselect,
    setpriceSelect,
    setcategoriesselect,
  } = useContext(CategoriesDataContext);
  const [activeProducts, setActiveProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [Featured, setFeatured] = useState("");
  const [search, setsearch] = useState("");
  const [sortBy, setSortBy] = useState("Featured");
  const [isOpen, setIsOpen] = useState(false);
  const [IsApply, setIsApply] = useState(false);
  const [searchproduct, setsearchproduct] = useState("");
const { detail, LoginState } = useContext(login);

console.log("LoginState:", LoginState);
console.log("Logged user:", detail);
console.log("User email:", detail?.emailform);

  const { products, setfirstproducts, totalprice, settotalprice } =
    useContext(user);

  const options = [
    {
      label: "Featured",
      value: "",
    },
    {
      label: "Price: Low → High",
      value: "asc",
    },
    {
      label: "Price: High → Low",
      value: "desc",
    },
    {
      label: "Top Rated",
      value: "true",
    },
    {
      label: "Low Rated",
      value: "false",
    },
  ];

  const handlechangecat = (e) => {
    console.log(e.target.value);
    setcategoriesselect(e.target.value);
    setCategory(e.target.value);
    if (e.target.value === "") return;
    setIsApply(true);
  };

  const displayProducts1 = Productsc.length === 0 ? Products : Productsc;

const updatecart = (product) => {
  setfirstproducts((prev) => {
    const exists = prev.some((item) => item.id === product.id);

    if (exists) {
      return prev;
    }

    return [
      ...prev,
      {
        ...product,
        quantity: 1,
        totalprice: product.price,
      },
    ];
  });
};
  const alreadypresent = () => {
    alert("product is already present");
  };

  const displayProducts2 =
    search.trim() !== ""
      ? displayProducts1.filter(
          (val) =>
            val.title.toLowerCase().includes(search.toLowerCase()) ||
            val.category.toLowerCase().includes(search.toLowerCase()),
        )
      : displayProducts1;

  const displayProducts = displayProducts2;

  const handlesearch = (e) => {
    const value = e.target.value;

    setsearchproduct(value);
    setsearch(value);
    setIsApply(value.trim() !== "");
  };

  const handlechangefea = (e) => {
    const value = e.target.value;

    if (value === "true" || value === "false") {
      setTopratedselect(value);
      setpriceSelect("");
      setFeatured(value);
    } else {
      setTopratedselect("");
      setpriceSelect(value);
      setFeatured(value);
    }

    setIsApply(value !== "");
  };

  const handleClear = () => {
    setCategory("");
    setFeatured("");
    setcategoriesselect("");
    setpriceSelect("");
    setTopratedselect("");
    setSortBy("Featured");
    setIsApply(false);
    setsearch("");
  };

  return (
    <div className="text-white px-1">
      <div className="flex w-full flex-col gap-6 px-8 py-10">
        {/* Top Section */}
        <div className="w-full">
          <h1 className="text-4xl font-bold text-slate-50">All Products</h1>

          <p className="mt-3 text-base text-slate-400">
            Showing {Products.length} products
          </p>
        </div>

        <div className="flex w-full items-center gap-4 rounded-3xl border border-[#27233C] px-2 p-3 transition-colors duration-300 ">
          <div className=" cursor-pointer  hover:border-[#C4B4FF] transition-colors duration-300 flex h-11 flex-1 items-center gap-3 rounded-full border border-[#272F5A] bg-[#0D1020] px-4    focus:border-[#C4B4FF] focus:outline-none  ">
            <Search size={20} className=" shrink-0 text-slate-400" />

            <input
              value={search}
              type="text"
              onChange={handlesearch}
              placeholder="Search products..."
              className="w-full bg-transparent text-sm text-slate-200 outline-none placeholder:text-slate-500"
            />
          </div>

          {/* Category */}
          <select
            value={category}
            onChange={handlechangecat}
            className="cursor-pointer  hover:border-[#C4B4FF] transition-colors duration-300 h-11 w-190px rounded-xl border border-[#272F5A] bg-[#0D1020] px-4 text-sm text-slate-300 outline-none"
          >
            <option
              className="bg-[#0D1020] text-[#C4B4FF] hover:bg-[#C4B4FF] hover:text-[#050817]"
              value=""
            >
              All Categories
            </option>
            {categories.map((cat, id) => (
              <option
                key={id}
                className="bg-[#0D1020] text-[#C4B4FF] hover:bg-[#C4B4FF] hover:text-[#050817]"
                value={cat.category}
              >
                {cat.categoryIcon} {cat.category}
              </option>
            ))}
          </select>

          {/* featured */}
          <select
            value={Featured}
            onChange={handlechangefea}
            className="cursor-pointer  hover:border-[#C4B4FF] transition-colors duration-300 h-11 w-190px rounded-xl border border-[#272F5A] bg-[#0D1020] px-4 text-sm text-slate-300 outline-none"
          >
            {options.map((cat, ind) => (
              <option
                key={ind}
                className="bg-[#0D1020] text-[#C4B4FF] hover:bg-[#C4B4FF] hover:text-[#050817]"
                value={cat.value}
              >
                {cat.label}
              </option>
            ))}
          </select>

          {IsApply && (
            <button
              onClick={handleClear}
              className="cursor-pointer flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-3 text-sm font-medium text-red-400 transition-all duration-300 hover:border-red-500  hover:text-white"
            >
              <X size={16} />
              Clear
            </button>
          )}
        </div>
      </div>

      {/* /image */}
      <div className=" grid sm:grid-cols-3 lg:grid-cols-5 gap-4 p-3">
        {displayProducts.map((product) => (
          <div
            onClick={() => Navigate(`/Productdetail/${product.id}`)}
            key={product.id}
            className="group flex h-500px cursor-pointer flex-col overflow-hidden rounded-3xl border border-[#37316B] bg-[#0D1020] p-5 transition-all duration-300 hover:border-[#C4B4FF]"
          >
            <div className="relative h-280px shrink-0 overflow-hidden rounded-2xl">
              <Heart
                onClick={() =>
                  setActiveProducts((prev) =>
                    prev.includes(product.id)
                      ? prev.filter((id) => id !== product.id)
                      : [...prev, product.id],
                  )
                }
                className={`absolute right-1 top-1 z-10 cursor-pointer rounded-full bg-[#050817]/90 p-2 transition-all duration-300 ${
                  activeProducts.includes(product.id)
                    ? "fill-[#C4B4FF] text-[#C4B4FF]"
                    : "text-white hover:fill-[#C4B4FF] hover:text-[#C4B4FF]"
                }`}
                size={36}
              />

              <div className="h-48 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
            <div>
              <p className="mb-3 mt-3 text-gray-500 text-sm">
                {product.category}
              </p>
              <h3 className="mb-4 line-clamp-2 min-h-56px text-lg font-semibold text-white">
                {product.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <div className="text-[#af97fc]">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill={
                        index < Math.round(product.rating.rate)
                          ? "currentColor"
                          : "none"
                      }
                      className={
                        index < Math.round(product.rating.rate)
                          ? "text-[#af97fc]"
                          : "text-slate-600"
                      }
                    />
                  ))}
                </div>
              </div>
              <span className="text-xs text-[#C4B4FF]">
                {product.rating.count}
              </span>
            </div>
            <hr className="mb-4 border-white/20" />
            <div className="flex items-center justify-between ">
              <p className="text-xl font-bold text-line-400 ">
                ${product.price}
              </p>
            </div>
            <div className="mt-4 ">
      <button
  disabled={products.some((item) => item.id === product.id)}
  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C4B4FF] px-4 py-3 font-medium text-[#050817] transition duration-300 hover:bg-[#B09AFF] disabled:cursor-not-allowed disabled:opacity-50"
  onClick={(e) => {
    e.stopPropagation();
    updatecart(product);
  }}
>
  <ShoppingCart size={22} />
  {products.some((item) => item.id === product.id)
    ? "Added to cart"
    : "Add to cart"}
</button>    
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
