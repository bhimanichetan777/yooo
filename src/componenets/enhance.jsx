import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function AjitZonePage() {
  return (
    <div className="bg-slate-200 text-black font-serif">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6 shadow-md bg-slate-200">
        <img
          src="https://ajitzone.com/wp-content/uploads/2024/04/logo.png"
          alt="Ajit Zone Logo"
          className="h-10 md:h-14"
        />
        <h1 className="text-base md:text-xl tracking-wide italic font-semibold text-center">
          Where fashion blends with <span className="text-rose-400">elegance</span> and <span className="text-amber-300">creativity</span>
        </h1>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-10 bg-slate-200">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">
          Discover Timeless Beauty
        </h2>
        <p className="max-w-xl text-base md:text-lg mb-4 text-black">
          Elevate your style with handpicked collections that speak tradition and modernity alike.
        </p>
      </section>
    </div>
  );
}
