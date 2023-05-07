import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDish } from "../config/axios";
import Navbar from "../components/Navbar";
import { getDocs, doc, setDoc, collection } from "firebase/firestore";
import { colRef, db } from "../config/firebase";

interface Dish {
  [key: string]: string;
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
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

  const ingredientsAndMeasures = [];

  if (dishData.length > 0) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = dishData[0][`strIngredient${i}`];
      const measure = dishData[0][`strMeasure${i}`];

      if (ingredient && measure) {
        ingredientsAndMeasures.push({ ingredient, measure });
      }
    }
  }

  console.log(dishData, "dishData");
  if (ingredientsAndMeasures.length > 0) {
    // console.log(ingredientsAndMeasures, "ingredientsAndMeasures");
  }

  const collectionRef = collection(
    db,
    "Ingredients",
    "CQeD2oQS6sWhpAM5i0Wfpfk5Gfm1",
    "Dish"
  );

  const getAllDocuments = async () => {
    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id}`);
    });
  };

  getAllDocuments();

  return (
    <>
      <Navbar />
      <div className="mt-[10vh]">
        {dishData.map((dish) => (
          <img key={dish.idMeal} src={dish.strMealThumb} alt={dish.strMeal} />
        ))}
      </div>
      <section>
        <h2>Ingredients:</h2>
        <ul>
          {ingredientsAndMeasures.map((ingredientAndMesasure, index) => (
            <li key={index}>
              {ingredientAndMesasure.ingredient} -
              {ingredientAndMesasure.measure}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Instructions:</h2>
        <p>{dishData[0]?.strInstructions}</p>
      </section>
      <button
        onClick={() => {
          const docRef = doc(colRef, "Oslo");
          setDoc(docRef, {
            str1: "hello",
            checked: false,
            strName: "Bukszpan",
          });
        }}
      >
        Add Doc
      </button>
    </>
  );
};

export default DishDetailPage;
