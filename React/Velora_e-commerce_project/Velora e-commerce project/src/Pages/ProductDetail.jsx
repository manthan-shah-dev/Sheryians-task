import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import axios from "axios";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  ShoppingCart,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

import { user } from "../context/UserCart";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
 console.log("Product ID:", id);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const { products, setfirstproducts } = useContext(user);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");
        setProduct(null);

        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`,
        );

        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Unable to load this product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080B14] text-slate-50">
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="animate-pulse text-sm text-[#C4B4FF]">
            Loading product...
          </p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-[#080B14] text-slate-50">
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-5">
          <p className="text-sm text-red-400">
            {error || "Product not found."}
          </p>

          <Link
            to="/shop"
            className="rounded-lg bg-[#C4B4FF] px-4 py-2 text-sm font-medium text-[#080B14]"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const isInCart = products.some((item) => item.id === product.id);
  const rating = product.rating?.rate ?? 0;
  const reviews = product.rating?.count ?? 0;

  const updatecart = () => {
    setfirstproducts((prev) => [
      ...prev,
      { ...product, totalprice: product.price, quantity: 1 },
    ]);
  };
  return (
    <div className="min-h-screen bg-[#080B14] text-slate-50">
      <main className="m-0 p-0">
        <div className="mx-auto w-full max-w-[1200px] px-3 py-4 sm:px-5">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-slate-400 sm:text-sm">
            <button
              onClick={() => navigate(-1)}
              className="transition hover:text-[#C4B4FF]"
            >
              <ArrowLeft className="mr-1 inline" size={14} />
              Products
            </button>

            <span>/</span>
            <span className="capitalize">{product.category}</span>
            <span>/</span>

            <span className="max-w-[220px] truncate text-slate-200 sm:max-w-none">
              {product.title}
            </span>
          </div>

          <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2 lg:gap-7">
            <div className="flex h-[320px] items-center justify-center overflow-hidden rounded-2xl bg-white p-5 sm:h-[400px] lg:h-[460px]">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="min-w-0">
              <span className="inline-block rounded-full border border-[#41366A] bg-[#0D1020] px-3 py-1 text-xs capitalize text-[#C4B4FF]">
                {product.category}
              </span>

              <h1 className="mt-3 text-xl font-bold leading-tight text-slate-50 sm:text-2xl">
                {product.title}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-400 sm:text-sm">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index}>
                      {index < Math.round(rating) ? "★" : "☆"}
                    </span>
                  ))}
                </div>

                <span className="font-semibold text-slate-200">
                  {rating.toFixed(1)}
                </span>

                <span>({reviews} reviews)</span>
              </div>

              <hr className="my-3 border-[#272F5A]" />

              <p className="text-2xl font-bold text-[#C4B4FF]">
                ${product.price.toFixed(2)}
              </p>

              <hr className="my-3 border-[#272F5A]" />

              <p className="text-sm leading-6 text-slate-400">
                {product.description}
              </p>

<div className="mt-3 flex gap-2">
  <button
    disabled={isInCart}
    onClick={(e) => {
      e.stopPropagation();
      updatecart(product);
    }}
    className="flex min-h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-[#C4B4FF] px-3 py-2 text-xs font-semibold text-[#080B14] transition hover:bg-[#B8A3FF] disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
  >
    <ShoppingCart size={17} />
    {isInCart ? "Added to Cart" : "Add to Cart"}
  </button>

  <button
    onClick={() => setIsFavorite((prev) => !prev)}
    aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#272F5A] transition hover:border-[#C4B4FF] ${
      isFavorite ? "text-[#C4B4FF]" : "text-slate-400"
    }`}
  >
    <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
  </button>
</div>

              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
                {[
                  {
                    Icon: Truck,
                    title: "Free Delivery",
                    description: "On orders $50+",
                  },
                  {
                    Icon: ShieldCheck,
                    title: "Secure Payment",
                    description: "Safe checkout",
                  },
                  {
                    Icon: RotateCcw,
                    title: "Easy Returns",
                    description: "30-day policy",
                  },
                ].map(({ Icon, title, description }) => (
                  <div
                    key={title}
                    className="flex flex-col items-center justify-center rounded-lg border border-[#272F5A] bg-[#0D1020] px-2 py-3 text-center"
                  >
                    <Icon size={17} className="mb-1.5 text-[#C4B4FF]" />

                    <h3 className="text-xs font-semibold text-slate-200">
                      {title}
                    </h3>

                    <p className="mt-1 text-[11px] text-slate-400">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  disabled={Number(id) <= 1}
                  onClick={() => navigate(`/Productdetail/${Number(id) - 1}`)}
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-[#272F5A] bg-[#0D1020] px-2 py-2 text-xs font-medium transition hover:border-[#C4B4FF] disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm"
                >
                  <ArrowLeft size={15} />
                  Previous
                </button>

                <button
                  disabled={Number(id) >= 20}
                  onClick={() => navigate(`/Productdetail/${Number(id) + 1}`)}
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-[#C4B4FF] px-2 py-2 text-xs font-medium text-[#080B14] transition hover:bg-[#B8A3FF] disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm"
                >
                  Next
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
