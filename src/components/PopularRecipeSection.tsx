import React, { useEffect, useState } from "react";
import { fetchPopular } from "../config/axios";
import { useNavigate } from "react-router-dom";

const PopularRecipe = () => {
  const [popular, setPopular] = useState([]);
  const navigate = useNavigate();

  interface Popular {
    idMeal: string;
    strMealThumb: string;
    strYoutube: string;
  }

  useEffect(() => {
    const fetchPopularRecipe = async () => {
      try {
        const response = await fetchPopular();
        setPopular(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPopularRecipe();
  }, []);

  const navigateToDetails = (dishId: string) => {
    navigate(`/Category/Dish/${dishId}`);
  };

  return (
    <section>
      <h2 className="text-center text-4xl mb-4">Popular Food</h2>
      <div className="w-full grid grid-cols-2 gap-4 p-4">
        {popular.length > 0 ? (
          popular.map((item: Popular) => (
            <div className="flex flex-col gap-2" key={item.idMeal}>
              <img className="rounded-xl" src={item.strMealThumb} />
              <button
                onClick={() => navigateToDetails(item.idMeal)}
                className="w-full border-2 border-mainGreen rounded-xl"
              >
                Details
              </button>
              <a
                href={item.strYoutube}
                target="_blank"
                className="w-full text-center border-2 border-mainGreen rounded-xl"
              >
                Video
              </a>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default PopularRecipe;
