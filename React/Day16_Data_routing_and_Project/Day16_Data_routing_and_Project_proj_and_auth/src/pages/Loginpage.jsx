import React, { useContext, useState } from "react";
import { Mail, LockKeyhole, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../context/Auth_cont";
import { toast } from "react-toastify";

const Loginpage = () => {
  const [showPassword, setShowPassword] = useState(false);

  let navigate = useNavigate();

  const { loggedIndUser, setloggedIndUser, registeredUsers } = useContext(Auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let formsubmit = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("InValid User not found of invalid credentials");
      reset();
      return;
    }
    setloggedIndUser(user);
    localStorage.setItem("loggedIndUser", JSON.stringify(user));
 toast.success("Login successful!");
    navigate('/main')
    reset();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#080B14] px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111827] p-8 shadow-2xl sm:p-10">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>

          <p className="mt-2 text-sm text-slate-400">
            Login to your Velora account
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(formsubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Email Address
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#080B14] px-4 focus-within:border-violet-500">
              <Mail size={19} className="text-slate-500" />

              <input
                {...register("email", {
                  required: "Email is required",
                })}
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-500"
              />
            </div>
          </div>{" "}
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Password
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#080B14] px-4 focus-within:border-violet-500">
              <LockKeyhole size={19} className="text-slate-500" />

              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="text-slate-500 hover:text-white"
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-400">
              {errors.password.message}
            </p>
          )}
          password
          {/* Login Button */}
          <button
            type="submit"
            className="cursor-pointer w-full rounded-xl bg-violet-600 py-3.5 font-semibold text-white transition duration-300 hover:bg-violet-500"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <div className="mt-6 text-center text-sm text-slate-400 flex justify-center gap-3 items-center">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="cursor-pointer font-semibold text-violet-400 hover:text-violet-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
