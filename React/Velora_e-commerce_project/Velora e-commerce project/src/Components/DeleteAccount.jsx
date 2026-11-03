import React, { useContext, useState } from "react";
import { login } from "../context/Login";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const DeleteAccount = () => {
  const { users, setUsers } = useContext(login);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleDelete = (e) => {
    e.preventDefault();

    const userExists = users.find(
      (user) => user.name === name && user.emailform === email,
    );

    if (!userExists) {
toast.error("Name or Email is incorrect!");
      return;
    }

    const result = confirm("Are you sure you want to delete your account?");

    if (result) {
      setUsers((prev) =>
        prev.filter(
          (user) => !(user.name === name && user.emailform === email),
        ),
      );

    toast.success("Account deleted successfully!");
      navigate("/register");
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050817] px-4 text-slate-50">
      <form
        onSubmit={handleDelete}
        className="w-full max-w-md rounded-3xl border border-[#272F5A] bg-[#0D1020] p-8 shadow-xl shadow-black/20"
      >
        <h1 className="text-2xl font-bold text-slate-50">Delete Account?</h1>

        <p className="my-4 text-sm leading-relaxed text-slate-400">
          Enter your registered name and email to delete your account
          permanently.
        </p>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 w-full rounded-xl border border-[#272F5A] bg-[#080B14] p-3 text-slate-50 placeholder:text-slate-500 outline-none transition focus:border-[#C4B4FF] focus:ring-2 focus:ring-[#C4B4FF]/10"
          required
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-6 w-full rounded-xl border border-[#272F5A] bg-[#080B14] p-3 text-slate-50 placeholder:text-slate-500 outline-none transition focus:border-[#C4B4FF] focus:ring-2 focus:ring-[#C4B4FF]/10"
          required
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-[#C4B4FF] py-3 font-semibold text-[#050817] transition hover:bg-[#B8A3FF] active:scale-[0.98]"
        >
          Delete My Account
        </button>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mt-3 w-full rounded-xl border border-[#272F5A] py-3 font-medium text-slate-300 transition hover:border-[#C4B4FF] hover:bg-[#1E293B] hover:text-[#C4B4FF]"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default DeleteAccount;
