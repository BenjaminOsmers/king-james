import React from "react";
import Hero from "../components/Hero/Hero";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import Footer from "../components/Footer";
import Brands from "../components/Brands/Brands";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <CaseStudies />
      <Brands />
      <Footer />
    </div>
  );
};

export default HomePage;
