import React, { useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

interface Props {
  searchBar: boolean;
  setSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar = ({ searchBar, setSearchBar }: Props) => {
  const [searchBy, setSearchBy] = useState("Ingredient");

  function changeSearchBy(value: string) {
    setSearchBy(value);
  }

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
            onClick={() => changeSearchBy("Ingredient")}
            className={`border-2 border-white rounded-xl px-4 py-2 ${
              searchBy === "Ingredient" ? "bg-white text-mainGreen" : ""
            }`}
          >
            Ingredient
          </button>
          <button
            onClick={() => changeSearchBy("Multi-Ingredient")}
            className={`border-2 border-white rounded-xl px-4 py-2 ${
              searchBy === "Multi-Ingredient" ? "bg-white text-mainGreen" : ""
            }`}
          >
            Multi-Ingredient
          </button>
          <button
            onClick={() => changeSearchBy("Dish Name")}
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
            className="w-full p-2 pr-8 bg-mainGreen border-2 border-white rounded-xl placeholder:text-white focus:outline-none"
          ></input>
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl">
            <AiOutlineSearch />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
