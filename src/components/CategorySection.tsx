import React, { useEffect, useState } from "react";
import fetchCategory from "../config/axios";

const CategorySection = () => {
  const [category, setCategory] = useState([]);

  interface Category {
    idCategory: string;
    strCategoryThumb: string;
    strCategory: string;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCategory();
        setCategory(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(); // Call the fetchData function
  }, []);

  return (
    <section className="w-full flex flex-col justify-center items-center gap-4">
      <h2 className="text-4xl">Food Categorys</h2>
      {category.length > 0 ? (
        category.slice(0, 12).map((item: Category) => (
          <div
            key={item.idCategory}
            className="w-2/3 flex flex-col justify-center items-center p-4 bg-mainGreen rounded-lg cursor-pointer"
          >
            <img src={item.strCategoryThumb} />
            <p className="text-3xl text-white">{item.strCategory}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default CategorySection;
