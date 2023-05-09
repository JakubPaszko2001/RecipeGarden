import React from "react";
import Plate from "../assets/LandingPageDish.webp";

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <img
        width={200}
        height={200}
        className="motion-safe:animate-spin-slow duration-1000"
        src={Plate}
        alt="Loading animation picture"
      />
      <p className="motion-safe:animate-bounce mt-6 text-xl">Loading</p>
    </div>
  );
};

export default Loading;
