import React from "react";

const About = () => {
  return (
    <div className="text-white">
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-slate-50">
          About <span className="text-[#C4B4FF]">Velora</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          A modern destination for discovering quality products and shopping
          with ease.
        </p>
      </section>
      <section className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
        <div className="rounded-xl border border-[#27233C] bg-[#0D1020] p-5 text-center">
          <h2 className="text-2xl font-bold text-[#C4B4FF]">10K+</h2>
          <p className="mt-1 text-sm text-slate-400">Products</p>
        </div>

        <div className="rounded-xl border border-[#27233C] bg-[#0D1020] p-5 text-center">
          <h2 className="text-2xl font-bold text-[#C4B4FF]">10K+</h2>
          <p className="mt-1 text-sm text-slate-400">Happy Customers</p>
        </div>

        <div className="rounded-xl border border-[#27233C] bg-[#0D1020] p-5 text-center">
          <h2 className="text-2xl font-bold text-[#C4B4FF]">4.5</h2>
          <p className="mt-1 text-sm text-slate-400">Average Rating</p>
        </div>

        <div className="rounded-xl border border-[#27233C] bg-[#0D1020] p-5 text-center">
          <h2 className="text-2xl font-bold text-[#C4B4FF]">90%</h2>
          <p className="mt-1 text-sm text-slate-400">On-Time Delivery</p>
        </div>
      </section>
      <section className="mx-auto mt-8 max-w-5xl rounded-2xl border border-[#27233C] bg-[#0D1020] p-6 md:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Our Story</h2>

        <p className="mt-4 leading-7 text-slate-400">
          Velora was created with a simple vision — to make online shopping
          simple, enjoyable, and convenient for everyone. We believe finding the
          right products should be an effortless experience.
        </p>

        <p className="mt-3 leading-7 text-slate-400">
          Our platform brings together products from different categories,
          helping customers discover items that suit their needs and
          preferences.
        </p>
      </section>
      <section className="mx-auto mt-12 max-w-5xl px-6">
        <h2 className="mb-6 text-center text-2xl font-bold text-slate-50">
          What We Stand For
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <article className="rounded-xl border border-[#27233C] bg-[#0D1020] p-5">
            <h3 className="text-lg font-semibold text-[#C4B4FF]">Trust</h3>
            <p className="mt-2 text-sm text-slate-400">
              We aim to create a reliable shopping experience where customers
              can explore products with confidence.
            </p>
          </article>

          <article className="rounded-xl border border-[#27233C] bg-[#0D1020] p-5">
            <h3 className="text-lg font-semibold text-[#C4B4FF]">Speed</h3>
            <p className="mt-2 text-sm text-slate-400">
              We aim to make browsing, searching, and discovering products quick
              and effortless.
            </p>
          </article>

          <article className="rounded-xl border border-[#27233C] bg-[#0D1020] p-5">
            <h3 className="text-lg font-semibold text-[#C4B4FF]">Community</h3>
            <p className="mt-2 text-sm text-slate-400">
              We value customer feedback and use it to improve the shopping
              experience.
            </p>
          </article>

          <article className="rounded-xl border border-[#27233C] bg-[#0D1020] p-5">
            <h3 className="text-lg font-semibold text-[#C4B4FF]">Quality</h3>
            <p className="mt-2 text-sm text-slate-400">
              We help customers discover products that match their needs and
              preferences.
            </p>
          </article>
        </div>
      </section>
      <section className="mx-auto mt-12 max-w-5xl px-6">
        <h2 className="mb-6 text-center text-2xl font-bold text-slate-50">
          Meet the Team
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <article className="rounded-xl border border-[#27233C] bg-[#0D1020] p-5 text-center">
            <h3 className="font-semibold text-slate-50">Rohit Mandge</h3>
            <p className="mt-1 text-sm text-slate-400">Frontend Developer</p>
          </article>

          <article className="rounded-xl border border-[#27233C] bg-[#0D1020] p-5 text-center">
            <h3 className="font-semibold text-slate-50">Vivek Ambe</h3>
            <p className="mt-1 text-sm text-slate-400">Backend Developer</p>
          </article>

          <article className="rounded-xl border border-[#27233C] bg-[#0D1020] p-5 text-center">
            <h3 className="font-semibold text-slate-50">Harsh Shah</h3>
            <p className="mt-1 text-sm text-slate-400">UI/UX Designer</p>
          </article>

          <article className="rounded-xl border border-[#27233C] bg-[#0D1020] p-5 text-center">
            <h3 className="font-semibold text-slate-50">Manthan Shah</h3>
            <p className="mt-1 text-sm text-slate-400">Full Stack Developer</p>
          </article>
        </div>
      </section>
      <section className="mx-auto mt-12 max-w-5xl rounded-2xl border border-[#27233C] bg-[#0D1020] p-6 text-center md:p-8">
        <h2 className="text-2xl font-bold text-[#C4B4FF]">Our Vision</h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
          Our vision is to create a modern and accessible shopping platform that
          brings people and products together through simplicity, innovation,
          and thoughtful design.
        </p>

        <h3 className="mt-6 font-semibold text-slate-50">
          Velora — Discover More. Shop Smarter. Live Better.
        </h3>
      </section>
      <footer className="mt-12 border-t border-[#27233C] bg-[#050817] px-6 py-8 text-center">
        <h2 className="text-2xl font-bold text-slate-50">Velora</h2>

        <p className="mt-2 text-sm tracking-widest text-slate-400">
          DISCOVER MORE. SHOP SMARTER. LIVE BETTER.
        </p>
      </footer>
    </div>
  );
};

export default About;
