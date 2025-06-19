import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What Sizes Are Available For Your Clothing?",
    answer: "We offer a wide range of sizes from XS to XXL, depending on the product.",
  },
  {
    question: "How Can I Place An Order?",
    answer: "Browse, add to cart, and proceed to checkout to complete your order.",
  },
  {
    question: "Do You Offer Cash On Delivery (COD)?",
    answer: "Yes, COD is available across most pin codes.",
  },
  {
    question: "How Long Does Delivery Take?",
    answer: "Typically 3–7 working days depending on your location.",
  },
  {
    question: "What Is Your Return And Exchange Policy?",
    answer: "We offer 7-day easy return and exchange.",
  },
  {
    question: "How Can I Contact Customer Support?",
    answer: "Reach us via WhatsApp, email or the contact page.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full bg-[#fdf9f5] py-16">
      <h2 className="text-4xl font-serif font-semibold mb-12 text-center">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col lg:flex-row w-full px-8 lg:px-16 gap-12">
        {/* Left Image */}
        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <img
            src="https://ajitzone.com/wp-content/uploads/2025/05/722x478-2048x1356.jpg"
            alt="Saree Promo"
            className="rounded-xl shadow-xl object-cover w-full max-w-[700px] h-auto"
          />
        </div>

        {/* Right FAQs */}
        <div className="lg:w-1/2 w-full space-y-5">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-2">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left flex justify-between items-center font-medium text-lg"
              >
                {index + 1}. {faq.question}
                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 bg-gray-100 mx-8 lg:mx-16 p-6 rounded-lg shadow-sm flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <h3 className="text-xl font-semibold font-serif">Do You Still Have Questions?</h3>
          <p className="text-gray-500 text-sm mt-1">
            Can’t find the answer you’re looking for? Please feel free to chat with us.
          </p>
        </div>
        <button className="mt-2 sm:mt-0 px-6 py-2 bg-[#6b0e16] text-white rounded-md shadow hover:bg-[#5a0c13]">
          Get in touch
        </button>
      </div>
    </div>
  );
}
