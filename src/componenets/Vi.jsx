import React from "react";
// Put the video here in your `assets` folder

export default function Video() {
  return (
    <section className="relative w-full h-screen overflow-hidden font-serif text-white">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={"https://ajitzone.com/wp-content/uploads/2025/05/model-.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />

      {/* Logo and Slogan */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <img
          src="https://ajitzone.com/wp-content/uploads/2024/04/logo.png"
          alt="Ajit Zone Logo"
          className="w-32 md:w-40 mb-6"
        />
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-wide">
          Where Fashion Blends with Elegance and Creativity
        </h1>
      </div>

      {/* Feature Highlights Below */}
      <div className="relative z-20 bg-[#9b4848] text-white py-5 px-4 sm:px-10 flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-10 text-sm sm:text-base">
        <div className="bg-white text-[#9b4848] px-6 py-3 rounded-full font-semibold shadow-md flex items-center gap-2">
          ✨ Great Deals At The End Of Every Week
        </div>
        <div className="bg-white text-[#9b4848] px-6 py-3 rounded-full font-semibold shadow-md flex items-center gap-2">
          🔥 Best Elegant Designs
        </div>
        <div className="bg-white text-[#9b4848] px-6 py-3 rounded-full font-semibold shadow-md flex items-center gap-2">
          ⚡ We Customize The Design To Your Liking
        </div>
      </div>
    </section>
  );
}
