import React from "react";
import "./App.css"; // Include this to support animation

const images = [
  "https://ajitzone.com/wp-content/uploads/2025/04/crop-top4-1000x1333.jpg",
  "https://ajitzone.com/wp-content/uploads/2025/04/crop-top3-1000x1333.jpg",
  "https://ajitzone.com/wp-content/uploads/2025/04/crop-top2-1000x1333.jpg",
  "https://ajitzone.com/wp-content/uploads/2025/04/crop-top1-1000x1333.jpg",
  "https://ajitzone.com/wp-content/uploads/2025/04/saree-15-1000x1333.jpg",
  "https://ajitzone.com/wp-content/uploads/2025/04/saree-17-1000x1333.jpg",
  "https://ajitzone.com/wp-content/uploads/2025/04/saree-2-1000x1333.jpg",
  "https://ajitzone.com/wp-content/uploads/2025/04/saree-1-1000x1333.jpg",
  "https://ajitzone.com/wp-content/uploads/2025/04/lahenga-2-1000x1333.jpg",
  "https://ajitzone.com/wp-content/uploads/2025/04/lahenga-4-1000x1333.jpg",
  "https://ajitzone.com/wp-content/uploads/2025/04/lahenga-3-1000x1333.jpg",
  "https://ajitzone.com/wp-content/uploads/2025/04/lahenga-1-1000x1333.jpg",
  "https://ajitzone.com/wp-content/uploads/2025/04/suit4-1000x1333.jpg",
  "https://ajitzone.com/wp-content/uploads/2025/04/suit-3-1000x1333.jpg",
  "https://ajitzone.com/wp-content/uploads/2025/04/suit-2-1000x1333.jpg",
  "https://ajitzone.com/wp-content/uploads/2025/04/suit-1-1000x1333.jpg",
];

export default function FixedCenterGallery() {
  const col1 = images.slice(0, 4);
  const col2 = images.slice(4, 8);
  const col3 = images.slice(8, 12);
  const col4 = images.slice(12, 16);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#fdf9f5] px-4 py-10">
      <div className="flex gap-6 overflow-hidden max-w-[1700px] w-full">
        {/* Left Column 1 */}
        <div className="w-[12%] flex flex-col gap-6 animate-scroll-down">
          {col1.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt=""
              className="rounded-xl shadow-lg object-cover w-full h-[250px]"
            />
          ))}
        </div>

        {/* Left Column 2 */}
        <div className="w-[12%] flex flex-col gap-6 animate-scroll-up">
          {col2.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt=""
              className="rounded-xl shadow-lg object-cover w-full h-[250px]"
            />
          ))}
        </div>

        {/* Center Fixed Image */}
        <div className="w-[44%] flex items-center justify-center">
          <img
            src="https://ajitzone.com/wp-content/uploads/2025/04/newsletter-img.png"
            alt="center"
            className="rounded-xl shadow-xl object-cover w-full h-[1100px] max-w-[800px]"
          />
        </div>

        {/* Right Column 1 */}
        <div className="w-[12%] flex flex-col gap-6 animate-scroll-down">
          {col3.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt=""
              className="rounded-xl shadow-lg object-cover w-full h-[250px]"
            />
          ))}
        </div>

        {/* Right Column 2 */}
        <div className="w-[12%] flex flex-col gap-6 animate-scroll-up">
          {col4.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt=""
              className="rounded-xl shadow-lg object-cover w-full h-[250px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
