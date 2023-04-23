import React from "react";
import PopularRecipe from "../components/PopularRecipe";
import CategorySection from "../components/CategorySection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategorySection />
      <PopularRecipe />
    </>
  );
};

export default Home;
