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
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";

const Login = () => {


return (
  <main className="min-h-screen bg-[#080B14] text-slate-50 grid grid-cols-1 min-[971px]:grid-cols-2">
    <div className="hidden min-[971px]:block">
      <LoginLeft />
    </div>

    <LoginRight />
  </main>
);}

export default Login;
