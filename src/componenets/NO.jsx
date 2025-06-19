import React from "react";

export default function HeroBanner() {
  return (
    <div className="w-full flex justify-center bg-[#fdf9f5] px-4 py-10">
      <div className="w-full max-w-7xl relative rounded-xl overflow-hidden shadow-xl">
        {/* 🎥 Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://ajitzone.com/wp-content/uploads/2025/05/model-.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* 🌓 Overlay with Content */}
        <div className="relative z-10 flex flex-col lg:flex-row bg-black/60 backdrop-blur-sm w-full h-full">
          {/* 📄 Left Text Block */}
          <div className="flex-1 text-white p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight">
              Ajit Zone - The #1 Trusted Textile <br />
              Company in Surat, Gujarat ( India )
            </h1>
            <div className="mt-6">
              <span className="inline-block px-6 py-2 bg-black/70 rounded-full font-medium text-lg tracking-wide">
                Premium Sarees | Designer Lehengas | Kids Ethnic Wear
              </span>
            </div>
          </div>

          {/* 👰 Right Static Image */}
          <div className="flex-1 hidden lg:block">
            <img
              src="https://ajitzone.com/wp-content/uploads/2025/04/newsletter-img.png"
              alt="Ajit Zone Bride"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
