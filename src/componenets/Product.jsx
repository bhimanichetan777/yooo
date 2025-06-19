import React, { useState } from "react";

const categories = ["Crop Top", "Saree", "Lehenga", "Suit"];

const products = [
  {
    id: 1,
    category: "Crop Top",
    name: "Crop Top1",
    image: "https://ajitzone.com/wp-content/uploads/2025/04/crop-top4-1000x1333.jpg",
  },
  {
    id: 2,
    category: "Crop Top",
    name: "Crop Top2",
    image: "https://ajitzone.com/wp-content/uploads/2025/04/crop-top3-1000x1333.jpg",
  },
  {
    id: 3,
    category: "Crop Top",
    name: "Crop Top3",
    image: "https://ajitzone.com/wp-content/uploads/2025/04/crop-top2-1000x1333.jpg",
  },
  {
    id: 4,
    category: "Crop Top",
    name: "Crop Top4",
    image: "https://ajitzone.com/wp-content/uploads/2025/04/crop-top1-1000x1333.jpg",
  },
  {
    id: 5,
    category: "Saree",
    name: "Saree 1",
    image: "https://ajitzone.com/wp-content/uploads/2025/04/saree-15-1000x1333.jpg",
  },
  {
    id: 6,
    category: "Saree",
    name: "Saree 2",
    image: "https://ajitzone.com/wp-content/uploads/2025/04/saree-17-1000x1333.jpg",
  },
  {
    id: 7,
    category: "Saree",
    name: "Saree 3",
    image: "https://ajitzone.com/wp-content/uploads/2025/04/saree-2-1000x1333.jpg",
  },
  {
    id: 8,
    category: "Saree",
    name: "Saree 4",
    image: "https://ajitzone.com/wp-content/uploads/2025/04/saree-1-1000x1333.jpg",
  },
  {
    id: 9,
    category: "Lehenga",
    name: "Bridal Lehenga 1",
    image: "https://ajitzone.com/wp-content/uploads/2025/04/lahenga-2-1000x1333.jpg",
  },
  {
    id: 10,
    category: "Lehenga",
    name: "Bridal Lehenga 2",
    image: "https://ajitzone.com/wp-content/uploads/2025/04/lahenga-4-1000x1333.jpg",
  },
  {
    id: 11,
    category: "Lehenga",
    name: "Bridal Lehenga 3",
    image: "https://ajitzone.com/wp-content/uploads/2025/04/lahenga-3-1000x1333.jpg",
  },
  {
    id: 12,
    category: "Lehenga",
    name: "Bridal Lehenga 4",
    image: "https://ajitzone.com/wp-content/uploads/2025/04/lahenga-1-1000x1333.jpg",
  },
  {
    id: 13,
    category: "Suit",
    name: "Suit 1",
    image: "https://ajitzone.com/wp-content/uploads/2025/04/suit4-1000x1333.jpg",
  },
  {
    id: 14,
    category: "Suit",
    name: "Suit 2",
    image: "https://ajitzone.com/wp-content/uploads/2025/04/suit-3-1000x1333.jpg",
  },
  {
    id: 15,
    category: "Suit",
    name: "Suit 3",
    image: "https://ajitzone.com/wp-content/uploads/2025/04/suit-2-1000x1333.jpg",
  },
  {
    id: 16,
    category: "Suit",
    name: "Suit 4",
    image: "https://ajitzone.com/wp-content/uploads/2025/04/suit-1-1000x1333.jpg",
  },
];

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("Crop Top");

  const filteredProducts = products.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="bg-[#fefaf6] min-h-screen px-6 py-10 font-serif">
      {/* Title */}
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-10">
        Find The Perfect Outfit For You
      </h1>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border transition font-medium ${
              selectedCategory === cat
                ? "bg-[#c85a54] text-white shadow"
                : "border-gray-400 hover:bg-gray-100 text-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            {/* Image Hover with Blur */}
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[450px] object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition duration-500 rounded-lg" />
            </div>

            {/* Product Info */}
            <h2 className="text-lg font-semibold mt-4 mb-2">{item.name}</h2>
            <button className="border border-rose-400 px-4 py-1 mb-2 rounded hover:bg-rose-100 text-sm">
              ENQUIRY!
            </button>
            <a
              href={`https://wa.me/919999999999?text=I'm%20interested%20in%20${item.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-500 text-white px-4 py-2 rounded text-sm"
            >
              WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
