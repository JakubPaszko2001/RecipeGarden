import React from "react";

const HeroSection = () => {
  return (
    <section className="h-[100vh] flex flex-col justify-center items-center text-5xl">
      <p>Let’s Start</p>
      <p>Cooking With</p>
      <p>Popular Recipes</p>
      <div className="mt-8">
        <button className="button bg-mainGreen border-mainGreen text-white">
          Get Started
        </button>
        <button className="button border-mainGreen ml-2">Explore Menu</button>
      </div>
    </section>
  );
};

export default HeroSection;
