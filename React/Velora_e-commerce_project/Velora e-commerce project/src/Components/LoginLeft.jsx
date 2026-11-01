import React from "react";
import {
  ShoppingBag,
  Sparkles,
  Package,
  Users,
  Star,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router";

const LoginLeft = () => {
  // const [showPassword, setShowPassword] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [rememberMe, setRememberMe] = useState(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Add your authentication logic here.
  // };

  return (
    
      <section className="flex flex-col justify-between border-b border-[#27233C] px-6 py-6 sm:px-10 md:px-12 lg:border-b-0 lg:border-r lg:px-12 lg:py-7 xl:px-14">
        <div>
          {/* Logo */}
          <NavLink to="/" className="mb-10 inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 shadow-lg shadow-violet-600/20">
              <ShoppingBag size={24} strokeWidth={2.2} />
            </span>
            <span className="text-xl font-bold tracking-tight sm:text-2xl">
              Velora
            </span>
          </NavLink>

          {/* Intro */}
          <div className="mt-7">
            <p className="mb-6 flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-[#C4B4FF] sm:text-sm">
              <Sparkles size={17} />
              WELCOME BACK
            </p>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl xl:text-[54px]">
              Shop the future.
              <br />
              <span className="mt-1 inline-block text-[#C4B4FF]">
                Your way.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
              Discover products you'll love, explore new arrivals, and enjoy a
              shopping experience designed around you.
            </p>
          </div>

          {/* Statistics */}
          <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3 sm:mt-9 sm:gap-4">
            <div className="rounded-2xl border border-[#27233C] bg-[#0D1020] p-4 sm:p-5">
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600/15 text-[#C4B4FF]">
                <Package size={20} />
              </span>
              <h2 className="text-lg font-bold text-[#C4B4FF] sm:text-xl">
                20K+
              </h2>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                Products
              </p>
            </div>

            <div className="rounded-2xl border border-[#27233C] bg-[#0D1020] p-4 sm:p-5">
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600/15 text-[#C4B4FF]">
                <Users size={20} />
              </span>
              <h2 className="text-lg font-bold text-[#C4B4FF] sm:text-xl">
                50K+
              </h2>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                Customers
              </p>
            </div>

            <div className="rounded-2xl border border-[#27233C] bg-[#0D1020] p-4 sm:p-5">
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600/15 text-[#C4B4FF]">
                <Star size={20} />
              </span>
              <h2 className="text-lg font-bold text-[#C4B4FF] sm:text-xl">
                4.9★
              </h2>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                Rating
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 flex items-center gap-3 pt-4 text-xs text-slate-500">
          <span className="h-1 w-9 rounded-full bg-[#C4B4FF]" />
          © 2026 Velora. Made for your everyday style.
        </footer>
      </section>


  )
};

export default LoginLeft;