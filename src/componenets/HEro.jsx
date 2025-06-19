import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Img1 from "../assets/aaa-Photoroom.png";
import Img2 from "../assets/aaaa.jpg";
import Img3 from "../assets/aaaaa.jpg";

const images = [Img1, Img2, Img3];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const startX = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000); // every 10s
    return () => resetTimeout();
  }, [current]);

  const handleMouseDown = (e) => {
    startX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    const diff = e.clientX - startX.current;
    if (diff > 50) {
      // swipe right -> previous
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
    } else if (diff < -50) {
      // swipe left -> next
      setCurrent((prev) => (prev + 1) % images.length);
    }
  };

  const handleClick = (e) => {
    const slider = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - slider.left;

    if (clickX < slider.width / 2) {
      // Left side click → NEXT image
      setCurrent((prev) => (prev + 1) % images.length);
    } else {
      // Right side click → PREVIOUS image
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden cursor-pointer h-[85vh]"
      onMouseDown={handleMouseDown}
      onMouseUp={(e) => {
        handleMouseUp(e);
        handleClick(e); // ← click-to-slide
      }}
      onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = endX - startX.current;
        if (diff > 50) {
          setCurrent((prev) => (prev - 1 + images.length) % images.length);
        } else if (diff < -50) {
          setCurrent((prev) => (prev + 1) % images.length);
        }
      }}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={current}
          src={images[current]}
          alt={`slide-${current}`}
          className="w-full h-full object-cover absolute"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        />
      </AnimatePresence>
    </div>
  );
}
