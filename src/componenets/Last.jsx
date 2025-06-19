import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

export default function Footerr() {
  const linkButtonStyle =
    "text-sm text-left w-full transition duration-300 hover:text-[#ffbaba] hover:scale-[1.03]";

  return (
    <footer className="bg-[#1c0f13] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Contact Info */}
        <div className="space-y-6 col-span-2">
          <img
            src="https://ajitzone.com/wp-content/uploads/2024/04/logo.png"
            alt="Ajit Zone Logo"
            className="h-12"
          />
          <div className="space-y-3">
            <p className="flex items-start gap-3 text-sm">
              <FaPhoneAlt className="mt-1" /> +91 7229038327
            </p>
            <p className="flex items-start gap-3 text-sm">
              <FaEnvelope className="mt-1" /> ajitzoneai@gmail.com
            </p>
            <p className="flex items-start gap-3 text-sm leading-relaxed">
              <FaMapMarkerAlt className="mt-1" />
              Raj Textile Tower, Shop No.: 7054 to 7059, B – Wing 7th Floor, O10,
              opp. Bhakti Dham Road, Saroli, Surat, Gujarat
            </p>
          </div>
        </div>

        {/* Product Links */}
        <div className="space-y-4">
          <h3 className="font-semibold">Our Products</h3>
          <ul className="space-y-2">
            {[
              "Gown",
              "Crop Top",
              "Saree",
              "Lehenga",
              "Suit",
              "Kurti",
              "Dupatta",
              "Blouse",
              "Under Garments",
              "Kids Wears",
              "Women Bottom Wear",
            ].map((item, idx) => (
              <li key={idx}>
                <button className={linkButtonStyle}>{item}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Care */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Customer Care</h3>
            <ul className="space-y-2">
              {["Refund Policy", "Privacy Policy", "Terms Of Service"].map(
                (item, idx) => (
                  <li key={idx}>
                    <button className={linkButtonStyle}>{item}</button>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-2">
              {["About", "Contact Us"].map((item, idx) => (
                <li key={idx}>
                  <button className={linkButtonStyle}>{item}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section with Vertical Divider */}
        <div className="space-y-6 flex flex-col justify-between h-full md:border-l md:border-white/20 md:pl-6">
          <img
            src="https://ajitzone.com/wp-content/uploads/2024/04/footer-image-1.png"
            alt="Newsletter"
            className="w-full h-48 object-cover rounded"
          />
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Join Our News Letter</h3>
            <p className="text-sm text-gray-300">
              Subscribe to our newsletter and receive exclusive offers
            </p>
            <div className="flex items-center border-b border-white">
              <input
                type="email"
                placeholder="ajitzoneai@gmail.com"
                className="bg-transparent outline-none text-sm flex-grow placeholder:text-gray-400"
              />
              <button className="text-white text-xl">→</button>
              
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
