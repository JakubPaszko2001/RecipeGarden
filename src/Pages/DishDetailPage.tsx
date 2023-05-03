import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDish } from "../config/axios";
import Navbar from "../components/Navbar";

interface Dish {
  [key: string]: string;
  strMealThumb: string;
  strInstructions: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
}

const DishDetailPage = () => {
  const [dishData, setDishData] = useState<Dish[]>([]);
  const { dishId } = useParams();

  useEffect(() => {
    const dishFetchData = async () => {
      try {
        const response = await fetchDish(dishId);
        setDishData(response);
      } catch (error) {
        console.error(error);
      }
    };
    dishFetchData();
  }, []);

  const ingredients = [];

  if (dishData.length > 0) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = dishData[0][`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }
  }

  const measures = [];

  if (dishData.length > 0) {
    for (let i = 1; i <= 20; i++) {
      const measure = dishData[0][`strMeasure${i}`];
      if (measure) {
        measures.push(measure);
      }
    }
  }

  console.log(dishData, "dishData");
  return (
    <>
      <Navbar />
      <div className="mt-[10vh]">
        {dishData.map((dish) => (
          <img key={dish.strMealThumb} src={dish.strMealThumb} />
        ))}
      </div>
      <section>
        <h2>Ingredients:</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Mesures:</h2>
        <ul>
          {measures.map((mesure, index) => (
            <li key={index}>{mesure}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Instructions:</h2>
        <p>{dishData[0]?.strInstructions}</p>
      </section>
    </>
  );
};

export default DishDetailPage;
