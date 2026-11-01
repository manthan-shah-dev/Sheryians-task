import React, { useContext, useState } from "react";
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
import { NavLink, useNavigate } from "react-router";
import { login } from "../context/Login";

const LoginRight = () => {
  const Navigate = useNavigate();
  const { users, form, setform, detail, setdetail, LoginState, setLoginState } =
    useContext(login);
  const [showPassword, setShowPassword] = useState(false);
  const [emailform, setemailform] = useState("");
  const [passwordform, setpasswordform] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const obj = {
      emailform,
      passwordform,
    };

    const data = users.find((val) => val.emailform === emailform);

    const emailform2 = detail.emailform;
    const password = detail.passwordform;
    console.log("email", emailform2);
    if (!data) {
      console.log("No user found");
      setLoginState(false);
    } else if (data.passwordform !== passwordform) {
      console.log("Incorrect password");
      setLoginState(false);
    } else {
      setLoginState(true);
      setdetail(data);

      console.log("Login successful:", data);
      Navigate("/");
    }
  };
  return (
    <section className="flex min-h-screen items-center justify-center px-5 py-8 sm:px-8 lg:min-h-0 lg:px-10 lg:py-8 xl:px-12">
      <div className="w-full max-w-[540px] rounded-[26px] border border-[#27233C] bg-[#0D1020] px-6 py-7 sm:px-8 sm:py-8 lg:px-9 lg:py-8">
        <header>
          <h2 className="text-3xl font-bold tracking-tight sm:text-[34px]">
            Sign in
          </h2>
          <p className="mt-1.5 text-sm text-slate-400 sm:text-base">
            Enter your credentials to continue.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="mt-7 space-y-5 sm:mt-8 sm:space-y-6"
        >
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2.5 block text-sm font-semibold text-slate-100"
            >
              Email address
            </label>

            <div className="flex h-[52px] items-center gap-3 rounded-2xl border border-[#27233C] bg-[#111827] px-4 transition focus-within:border-[#C4B4FF] sm:h-[56px]">
              <Mail size={20} className="shrink-0 text-slate-500" />
              <input
                id="emailform"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={emailform}
                onChange={(event) => setemailform(event.target.value)}
                required
                className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500 sm:text-base"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2.5 block text-sm font-semibold text-slate-100"
            >
              Password
            </label>

            <div className="flex h-[52px] items-center gap-3 rounded-2xl border border-[#27233C] bg-[#111827] px-4 transition focus-within:border-[#C4B4FF] sm:h-[56px]">
              <LockKeyhole size={20} className="shrink-0 text-slate-500" />

              <input
                id="passwordform"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                value={passwordform}
                onChange={(event) => setpasswordform(event.target.value)}
                required
                className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500 sm:text-base"
              />

              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((current) => !current)}
                className="shrink-0 text-slate-500 transition hover:text-[#C4B4FF]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember / Forgot */}
         <div className="flex items-center justify-between gap-3">
  <label className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-400">
    <input
      type="checkbox"
      checked={rememberMe}
      onChange={(event) => setRememberMe(event.target.checked)}
      className="h-4 w-4 accent-violet-600"
    />
    Remember me
  </label>

  <NavLink
    to="/delete-account"
    className="text-sm font-semibold text-[#C4B4FF] transition hover:text-white"
  >
    Delete Account?
  </NavLink>
</div>

          {/* Submit */}
          <button
            type="submit"
            className="flex h-[56px] w-full items-center justify-center gap-3 rounded-2xl bg-violet-600 text-base font-semibold text-white transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-[#0D1020] sm:h-[60px]"
          >
            Sign in
            <ArrowRight size={20} />
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <span className="h-px flex-1 bg-[#27233C]" />
          <span className="text-xs text-slate-500 sm:text-sm">OR</span>
          <span className="h-px flex-1 bg-[#27233C]" />
        </div>

        {/* Register link */}
        <p className="text-center text-sm text-slate-400 sm:text-base">
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className="font-semibold text-[#C4B4FF] transition hover:text-white"
          >
            Create one
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default LoginRight;
