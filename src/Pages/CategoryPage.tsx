import React, { useEffect, useState } from "react";
import { fetchSpecificCategory } from "../config/axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

interface Category {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const CategoryPage = () => {
  const [categoryData, setCategoryData] = useState([]);
  const navigate = useNavigate();
  const { category } = useParams();
  console.log(category);
  useEffect(() => {
    const categoryFetchData = async () => {
      try {
        const response = await fetchSpecificCategory(category);
        console.log(response);
        setCategoryData(response);
      } catch (error) {
        console.error(error);
      }
    };
    categoryFetchData();
  }, []);

  const navigateToDetails = (dishId: string) => {
    navigate(`/Category/${category}/${dishId}`);
  };
  return (
    <section>
      <h2 className="text-center text-4xl mb-4">{category}</h2>
      <div className="w-full grid grid-cols-2 gap-4 p-4">
        {categoryData &&
          categoryData.map((item: Category) => (
            <div className="flex flex-col gap-2" key={item.idMeal}>
              <img
                className="rounded-xl"
                src={item.strMealThumb}
                alt={item.strMeal}
              />
              {/* <p className="text-lg font-bold">{item.strMeal}</p> */}
              <button
                data-cy="detailsButton"
                onClick={() => {
                  navigateToDetails(item.idMeal);
                }}
                className="w-full border-2 border-mainGreen rounded-xl"
              >
                Details
              </button>
            </div>
          ))}
      </div>
    </section>
  );
};

export default CategoryPage;
