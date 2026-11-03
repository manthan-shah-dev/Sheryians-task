import { Zap, UserRound, Mail, Lock, Eye, ArrowRight } from "lucide-react";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { login } from "../context/Login";
import { toast } from "react-toastify";

const Register = () => {
  const { users, setUsers } = useContext(login);
  const [name, setname] = useState("");
  const [emailform, setemailform] = useState("");
  const [passwordform, setpasswordform] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const handlesubmit = (event) => {
    event.preventDefault();

    const userExists = users.some((user) => user.emailform === emailform);

    if (userExists) {
      toast.warning("You are already registered! Please login.");
      navigate("/login");
      return;
    }
    if (confirmpassword !== passwordform) {
      toast.error("Passwords do not match!");
      return;
    }

    const obj = { name, emailform, passwordform };


    setUsers((prev) => [...prev, obj]);


    const result = confirm(
      "Registration successful! Do you want to go to Login?",
    );

    if (result) {
      toast.success("Registration successful!");
      navigate("/login");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#080B14] px-4 py-5 text-slate-50">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C4B4FF] text-[#080B14]">
          <Zap size={23} fill="currentColor" />
        </div>

        <h1 className="text-2xl font-bold tracking-tight">
          Velo<span className="text-[#C4B4FF]">ra</span>
        </h1>
      </div>

      <div className="w-full max-w-[560px] rounded-3xl border border-[#272F5A] bg-[#0D1020] px-6 py-8 sm:px-10 sm:py-10">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Create account
        </h2>

        <p className="mt-2 text-sm text-slate-400 sm:text-base">
          Join Velora and start shopping
        </p>
        <form
          onSubmit={handlesubmit}
          className="mt-7 space-y-5 sm:mt-8 sm:space-y-6"
        >
          <div className="mt-8 space-y-4">
            <div className="flex h-14 items-center gap-3 rounded-2xl border border-[#272F5A] bg-[#080B14] px-4 transition focus-within:border-[#C4B4FF]">
              <UserRound size={19} className="shrink-0 text-slate-400" />
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setname(event.target.value)}
                placeholder="Full name"
                className="w-full bg-transparent text-sm text-slate-50 outline-none placeholder:text-slate-500"
              />
            </div>

            <div className="flex h-14 items-center gap-3 rounded-2xl border border-[#272F5A] bg-[#080B14] px-4 transition focus-within:border-[#C4B4FF]">
              <Mail size={19} className="shrink-0 text-slate-400" />
              <input
                id="emailform"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={emailform}
                onChange={(event) => setemailform(event.target.value)}
                className="w-full bg-transparent text-sm text-slate-50 outline-none placeholder:text-slate-500"
              />
            </div>
            <div className="flex h-14 items-center gap-3 rounded-2xl border border-[#272F5A] bg-[#080B14] px-4 transition focus-within:border-[#C4B4FF]">
              <Lock size={19} className="shrink-0 text-slate-400" />

              <input
                id="passwordform"
                autoComplete="new-password"
                type={showPassword ? "text" : "password"}
                value={passwordform}
                onChange={(event) => setpasswordform(event.target.value)}
                required
                minLength={6}
                placeholder="Password (min 6 characters)"
                className="w-full bg-transparent text-sm text-slate-50 outline-none placeholder:text-slate-500"
              />

              <Eye
                onClick={() => setShowPassword((prev) => !prev)}
                size={19}
                className="shrink-0 cursor-pointer text-slate-400 transition hover:text-[#C4B4FF]"
              />
            </div>

            <div className="flex h-14 items-center gap-3 rounded-2xl border border-[#272F5A] bg-[#080B14] px-4 transition focus-within:border-[#C4B4FF]">
              <Lock size={19} className="shrink-0 text-slate-400" />

              <input
                id="confirmpassword"
                type="password"
                autoComplete="new-password"
                value={confirmpassword}
                onChange={(event) => setconfirmpassword(event.target.value)}
                required
                minLength={6}
                placeholder="Confirm password"
                className="w-full bg-transparent text-sm text-slate-50 outline-none placeholder:text-slate-500"
              />
            </div>
            <button className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#C4B4FF] text-base font-semibold text-[#080B14] transition hover:bg-[#B8A3FF]">
              Create Account
              <ArrowRight size={20} />
            </button>
          </div>
          <p className="mt-7 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="font-semibold text-[#C4B4FF] transition hover:text-white"
            >
              Sign in
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
