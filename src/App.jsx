import React from "react";
import TopBar from "./componenets/Topbar";
import Navbar from "./componenets/Navbar";
import Hero from "./componenets/HEro";
import CategoryCards from "./componenets/CategoryCards";
import AjitZonePage from "./componenets/enhance";
import CategorySection from "./componenets/Cloths";
import Video from "./componenets/Vi";
import Footer from "./componenets/Footer";
import ProductPage from "./componenets/Product";
import FixedCenterGallery from "./componenets/FixedCenterGallery";
import FaqSection from "./componenets/Sec";
import StatsSection from "./componenets/De";
import HeroBanner from "./componenets/NO";
import Footerr from "./componenets/Last";

function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <CategoryCards />
      <CategorySection />
      <AjitZonePage />
      <Video />
      <ProductPage />
      <FixedCenterGallery />
      <FaqSection />
      <StatsSection />
      <HeroBanner />
      <Footerr />
      <Footer />
    </div>
  );
}

export default App;
