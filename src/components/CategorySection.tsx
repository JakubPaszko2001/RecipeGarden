import React, { useEffect, useState } from "react";
import { fetchCategory } from "../config/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const CategorySection = () => {
  const [category, setCategory] = useState([]);
  const [popular, setPopular] = useState([]);

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
    fetchData();
  }, []);

  return (
    <section className="w-full flex flex-col justify-center items-center gap-4">
      <h2 className="text-4xl">Food Categorys</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {category.length > 0 ? (
          category.slice(0, 12).map((item: Category) => (
            <SwiperSlide key={item.idCategory}>
              <img src={item.strCategoryThumb} />
              <p className="text-xl">{item.strCategory}</p>
            </SwiperSlide>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Swiper>
    </section>
  );
};

export default CategorySection;
