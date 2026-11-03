import React, { useContext, useState } from "react";
import { UserRound, Mail, LockKeyhole, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../context/Auth_cont";
const Registerpage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { registeredUsers, setregisteredUsers } = useContext(Auth);

  let Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  let formsubmit = (data) => {

    setregisteredUsers([...registeredUsers,data])
    alert("uUser Register successfully")
    console.log(registeredUsers);

    localStorage.setItem('registeredUsers',JSON.stringify([...registeredUsers,data]))
    reset();
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#080B14] px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111827] p-8 shadow-2xl sm:p-10">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Create Account</h1>

          <p className="mt-2 text-sm text-slate-400">
            Join Velora and discover something new
          </p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit(formsubmit)} className="space-y-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Full Name
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#080B14] px-4 focus-within:border-violet-500">
              <UserRound size={19} className="text-slate-500" />

              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                // required
                className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-500"
              />
            </div>
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
          )}
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
                  required: "email is required",
                })}
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                // required
                className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-500"
              />
            </div>
          </div>
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
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "minimum 6 character is required",
                  },
                })}
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                autoComplete="new-password"
                // required
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

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Confirm Password
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#080B14] px-4 focus-within:border-violet-500">
              <LockKeyhole size={19} className="text-slate-500" />

              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                autoComplete="new-password"
                // required
                className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-500"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
                className="text-slate-500 hover:text-white"
              >
                {showConfirmPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
          </div>

          {/* Register Button */}
          <button
            disabled={!isValid}
            type="submit"
            className="w-full rounded-xl bg-violet-600 py-3.5 cursor-pointer font-semibold text-white transition duration-300 hover:bg-violet-500"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-slate-400 flex justify-center gap-3 items-center">
          Already have an account?{" "}
          <button
            onClick={() => Navigate("/")}
            className=" cursor-pointer font-semibold text-violet-400 transition hover:text-violet-300"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Registerpage;
