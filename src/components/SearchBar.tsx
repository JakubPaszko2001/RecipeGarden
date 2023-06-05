import React, { useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { fetchByDishName, fetchByIngredient } from "../config/axios";

interface Props {
  searchBar: boolean;
  setSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MealData {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const SearchBar = ({ searchBar, setSearchBar }: Props) => {
  const [searchBy, setSearchBy] = useState("Ingredient");
  const [inputValue, setInputValue] = useState("");
  const [fetchData, setFetchData] = useState<MealData[]>([]);
  const [visibleItems, setVisibleItems] = useState(5);

  function getInputPlaceholder() {
    if (searchBy === "Ingredient") {
      return "Type Ingredient (garlic)";
    } else if (searchBy === "Multi-Ingredient") {
      return "Type Multiple Ingredients (garlic,salt)";
    } else if (searchBy === "Dish Name") {
      return "Type Dish Name (Arrabiata)";
    }
    return "";
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  async function handleSearch() {
    try {
      if (searchBy === "Ingredient" || searchBy === "Multi-Ingredient") {
        const response = await fetchByIngredient(inputValue);
        setFetchData(response);
        console.log(response);
      } else if (searchBy === "Dish Name") {
        const response = await fetchByDishName(inputValue);
        setFetchData(response);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleLoadMore() {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  }

  return (
    <nav
      className={`w-full h-screen fixed ${
        searchBar ? "top-[0%]" : "top-[-100vh]"
      } left-0 bg-mainGreen ease-in duration-300 text-white z-50`}
    >
      <div className="h-[10vh] w-full flex justify-end items-center p-4">
        <button>
          <AiOutlineClose
            onClick={() => setSearchBar(false)}
            className="text-3xl"
          />
        </button>
      </div>
      <div className="px-8">
        <div className="w-full flex justify-between text-2xl text-white rounded-xl">
          <button
            onClick={() => setSearchBy("Ingredient")}
            className={`border-2 border-white rounded-xl px-4 py-2 ${
              searchBy === "Ingredient" ? "bg-white text-mainGreen" : ""
            }`}
          >
            Ingredient
          </button>
          <button
            onClick={() => setSearchBy("Multi-Ingredient")}
            className={`border-2 border-white rounded-xl px-4 py-2 ${
              searchBy === "Multi-Ingredient" ? "bg-white text-mainGreen" : ""
            }`}
          >
            Multi-Ingredient
          </button>
          <button
            onClick={() => setSearchBy("Dish Name")}
            className={`border-2 border-white rounded-xl px-4 py-2 ${
              searchBy === "Dish Name" ? "bg-white text-mainGreen" : ""
            }`}
          >
            Dish Name
          </button>
        </div>
        <div className="relative mt-4">
          <input
            placeholder={getInputPlaceholder()}
            onChange={handleChange}
            className="w-full p-2 pr-8 bg-mainGreen border-2 border-white rounded-xl placeholder:text-white focus:outline-none"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          ></input>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl"
            onClick={handleSearch}
          >
            <AiOutlineSearch />
          </button>
        </div>
        <div className="mt-4">
          <ul className="h-[60vh] overflow-y-auto">
            {fetchData.slice(0, visibleItems).map((meal) => (
              <li
                key={meal.idMeal}
                className="w-full p-2 border-2 border-white rounded-xl"
              >
                <img src={meal.strMealThumb} alt="" />
                <p>{meal.strMeal}</p>
              </li>
            ))}
          </ul>
          {visibleItems < fetchData.length && (
            <button
              className="mt-4 bg-white text-mainGreen rounded-xl px-4 py-2"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
