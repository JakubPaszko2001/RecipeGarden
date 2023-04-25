import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dishFetch } from "../config/axios";
const DishDetailPage = () => {
  const [dishData, setDishData] = useState([]);
  const { dishId } = useParams();
  console.log(dishId);

  interface Dish {
    strMealThumb: string;
  }

  useEffect(() => {
    const dishFetchData = async () => {
      try {
        const response = await dishFetch(dishId);
        // console.log(response);
        setDishData(response);
        console.log(dishData);
      } catch (error) {
        console.error(error);
      }
    };
    dishFetchData();
  }, []);

  return (
    <div>
      <div>
        {dishData &&
          dishData.map((dish: Dish) => <img src={dish.strMealThumb} />)}
      </div>
    </div>
  );
};

export default DishDetailPage;
