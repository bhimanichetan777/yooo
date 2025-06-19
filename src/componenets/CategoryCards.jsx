import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://ajitzone.com/wp-content/uploads/2025/05/558x367-01-2048x1354.jpg",
  "https://ajitzone.com/wp-content/uploads/2025/05/558x367-final-03-1-2048x1347.jpg",
  "https://ajitzone.com/wp-content/uploads/2025/05/558x367-final-3-2048x1347.jpg",
];

export default function CategoryCards() {
  return (
    <section className="bg-[#faf7f3] py-12 px-4 sm:px-6 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="w-full max-w-[420px] rounded-3xl overflow-hidden shadow-2xl group bg-white"
          >
            <img
              src={img}
              alt={`category-${idx}`}
              className="w-full h-auto rounded-3xl transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
