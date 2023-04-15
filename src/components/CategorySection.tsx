import React, { useEffect, useState } from "react";
import fetchCategory from "../config/axios";

const CategorySection = () => {
  const [category, setCategory] = useState([]);

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
      <h2 className="text-4xl">Food Category</h2>
      {category.length > 0 ? (
        // Render the category data if it exists
        category.map((item) => (
          <div
            key={item.idCategory} // Assuming item has an id property
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
