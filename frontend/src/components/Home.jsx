import React from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategeoryCarousel from "./CategeoryCarousel";
import LatestJobs from "./LatestJobs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategeoryCarousel />
      <LatestJobs />
    </div>
  );
};

export default Home;
