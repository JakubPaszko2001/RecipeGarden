import React, { useEffect, useState } from "react";
import { fetchPopular } from "../config/axios";

const PopularRecipe = () => {
  const [popular, setPopular] = useState([]);

  interface Popular {
    idMeal: string;
    strMealThumb: string;
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
  return (
    <div className="w-full grid grid-cols-2 gap-4 p-4">
      {popular.length > 0 ? (
        popular.map((item: Popular) => (
          <div key={item.idMeal}>
            <img src={item.strMealThumb} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PopularRecipe;
