import React from "react";
import LandingPageDish from "../assets/LandingPageDish.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroSection = () => {
  return (
    <section className="h-[100vh] flex flex-col justify-center items-center text-5xl">
      <h2>Let’s Start</h2>
      <p>Cooking With</p>
      <p>Popular Recipes</p>
      <div className="mt-8">
        <button className="button bg-mainGreen border-mainGreen text-white">
          Get Started
        </button>
        <button className="button border-mainGreen ml-2">Explore Menu</button>
      </div>
      <LazyLoadImage
        src={LandingPageDish}
        alt="Landing Page Dish"
        className="absolute bottom-[-20px] left-[-110px] w-[80vw] -z-10 max-w-[310px]"
      />
    </section>
  );
};

export default HeroSection;
