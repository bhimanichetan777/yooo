import React from "react";
import {
  FaUserFriends,
  FaHeadset,
  FaGlobeAsia,
  FaPaintBrush,
  FaAward,
} from "react-icons/fa";
import bgPattern from "../assets/Burgundy Diamond Floral Pattern.png"; // ✅ import image

export default function StatsSection() {
  const stats = [
    { icon: <FaPaintBrush size={36} />, label: "Exclusive Designs" },
    { icon: <FaUserFriends size={36} />, label: "Satisfied Clients" },
    { icon: <FaAward size={36} />, label: "22 Years Experience" },
    { icon: <FaHeadset size={36} />, label: "Customer Care Service" },
    { icon: <FaGlobeAsia size={36} />, label: "32+ Countries Covered" },
  ];

  return (
    <div
      className="w-full bg-repeat py-10 text-white"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-center items-center sm:items-stretch divide-y sm:divide-y-0 sm:divide-x divide-white text-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex-1 px-4 py-6 transition-all duration-300 hover flex flex-col items-center justify-center gap-2"
          >
            <div className="text-white transform hover:scale-110 transition duration-300">
              {item.icon}
            </div>
            <p className="text-sm font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
