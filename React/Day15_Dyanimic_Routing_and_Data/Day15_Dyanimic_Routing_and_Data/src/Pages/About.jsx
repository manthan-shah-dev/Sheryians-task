import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-1.5 ">
      {/* Hero Section */}
      <section className="bg-gray-900 px-6 py-20 text-center text-white rounded-2xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          About Us
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">Shopping Made Simple</h1>

        <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-300">
          Discover a better way to shop. Explore a variety of products, find
          your favorites, and enjoy a smooth shopping experience.
        </p>

        {/* <Link
          to="/"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-3 text-base font-bold text-white transition hover:bg-blue-700"
        >
          Explore Products
        </Link> */}
      </section>

      {/* About Section */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
            Who We Are
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Your Everyday Shopping Destination
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Our goal is to make online shopping easy, convenient, and enjoyable.
            Browse products, explore detailed descriptions, check prices, and
            manage your shopping cart with ease.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            From clothing to accessories, discover products through a simple and
            user-friendly interface.
          </p>
        </div>

        <div className="flex min-h-80 items-center justify-center rounded-3xl bg-blue-100 p-8">
          <div className="text-center">
            <div className="text-8xl">🛍️</div>
            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Shop. Discover. Enjoy.
            </h3>
            <p className="mt-3 text-gray-600">
              Everything you need in one simple experience.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Why Choose Us?
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "🔎",
                title: "Explore Products",
                desc: "Discover products, prices, ratings, and categories.",
              },
              {
                icon: "🛒",
                title: "Easy Shopping",
                desc: "Add your favorite products and manage your cart.",
              },
              {
                icon: "📱",
                title: "Responsive Design",
                desc: "Enjoy a seamless experience on any device.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Ready to Explore?</h2>

        <p className="mt-4 text-gray-600">
          Find your next favorite product today.
        </p>

        {/* <Link
          to="/"
          className="mt-7 inline-block rounded-xl bg-gray-900 px-8 py-3 text-base font-bold text-white transition duration-300 hover:bg-blue-600"
        >
          Start Shopping
        </Link> */}
      </section>
    </div>
  );
};

export default About;
