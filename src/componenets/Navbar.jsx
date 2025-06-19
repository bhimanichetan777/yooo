import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#f7f4f0] py-3 px-6 flex items-center justify-between font-sans shadow-sm">
      {/* Left - Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="https://ajitzone.com/wp-content/uploads/2024/04/logo.png"
          alt="AJIT ZONE"
          className="h-10"
        />
        <div className="flex flex-col leading-tight">
        </div>
      </div>

      {/* Center - Navigation */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium text-black">
        {[
          "Home",
          "Gown",
          "Crop Top",
          "Saree",
          "Lehenga",
          "Suit",
          "Kurti",
          "Blouse",
          "Kids Wear",
          "Women Bottom Wear",
        ].map((item, index) => (
          <li
            key={index}
            className="transition-all duration-200 hover:text-[#d52b1e] hover:scale-105 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Right - Search Icon */}
      <div>
        <FaSearch className="text-black cursor-pointer hover:scale-110 transition-transform duration-200" />
      </div>
    </nav>
  );
}
