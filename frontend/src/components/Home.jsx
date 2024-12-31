import React from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategeoryCarousel from "./CategeoryCarousel";
import LatestJobs from "./LatestJobs";
import Footer from "./shared/Footer";


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategeoryCarousel />
      <LatestJobs />
      <Footer />
    </div>
  );
};

export default Home;
