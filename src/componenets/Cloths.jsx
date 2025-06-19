import React, { useState } from "react";
import bgImage from "../assets/Burgundy Diamond Floral Pattern.png";

const categories = [
  { name: "Saree", img: "https://ajitzone.com/wp-content/uploads/2025/04/saree-17-1037x1536.jpg" },
  { name: "Lehenga", img: "https://ajitzone.com/wp-content/uploads/2025/04/lahenga-3-1037x1536.jpg" },
  { name: "Suit", img: "https://ajitzone.com/wp-content/uploads/2025/04/suit-2-1037x1536.jpg" },
  { name: "Gown", img: "https://ajitzone.com/wp-content/uploads/2025/04/gown-1000x1481-1-1.png" },
  { name: "Crop Top", img: "https://ajitzone.com/wp-content/uploads/2025/04/crop-top3-1037x1536.jpg" },
  { name: "Blouse", img: "https://ajitzone.com/wp-content/uploads/2025/04/blouse-2-1037x1536.jpg" },
  { name: "Kids Wear", img: "https://ajitzone.com/wp-content/uploads/2025/04/kids-wear-5-1037x1536.jpg" },
  { name: "Kurti", img: "https://ajitzone.com/wp-content/uploads/2025/04/kurti-2-1037x1536.jpg" },
  { name: "Dupatta", img: "https://ajitzone.com/wp-content/uploads/2025/04/dupatta-2-1037x1536.jpg" },
  { name: "Crop Top", img: "https://ajitzone.com/wp-content/uploads/2025/04/crop-top3-1037x1536.jpg" },
];

export default function CategorySection() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section
      className="relative py-20 bg-fixed bg-center bg-cover text-white font-serif text-xl"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 px-4 sm:px-10 text-center">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="relative cursor-pointer flex flex-col items-center group"
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {hoverIndex === i && (
              <div className="absolute -top-60 w-48 h-64 rounded-2xl border-4 border-white overflow-hidden shadow-2xl backdrop-blur-md z-10">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <span className="mb-2 transition-transform duration-200 group-hover:scale-110 text-2xl font-semibold tracking-wide">
              {cat.name}
            </span>

            {/* 🏰 Royal symbol below each category */}
            <img
              src="https://cdn-icons-png.flaticon.com/128/2545/2545603.png"
              alt="Royal Symbol"
              className="w-6 h-6 mt-2 opacity-90"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
