import React from "react";
import bgImage from "../assets/Burgundy Diamond Floral Pattern.png"; // Adjust the path if needed

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaCheck,
  FaPhoneAlt,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div
      className="text-white text-sm"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 py-2 gap-4">
        {/* Left Icons */}
        <div className="flex gap-3 text-lg">
          <FaInstagram className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
        </div>

        {/* Marquee Text */}
        <div className="relative w-[400px] overflow-hidden">
          <div className="animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
            <span className="mx-4 inline-flex items-center gap-1">
              <FaCheck className="text-white" />
              Your Trusted Clothing Partner
            </span>
            <span className="mx-4 inline-flex items-center gap-1">
              <FaCheck className="text-white" />
              Grow Your Fashion Business with Ajit Zone
            </span>
            <span className="mx-4 inline-flex items-center gap-1">
              <FaCheck className="text-white" />
              Your Trusted Clothing Partner
            </span>
          </div>
        </div>

        {/* Right Phone */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          <FaPhoneAlt />
          +91 7229038327
        </div>
      </div>
    </div>
  );
};

export default TopBar;
