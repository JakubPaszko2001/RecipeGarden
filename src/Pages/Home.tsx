import React from "react";
import PopularRecipeSection from "../components/PopularRecipeSection";
import CategorySection from "../components/CategorySection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategorySection />
      <PopularRecipeSection />
    </>
  );
};

export default Home;
