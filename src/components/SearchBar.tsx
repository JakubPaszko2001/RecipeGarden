import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface Props {
  searchBar: boolean;
  setSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar = ({ searchBar, setSearchBar }: Props) => {
  const navigate = useNavigate();
  const navigateToShoppingList = () => {
    navigate(`/shoppinglist`);
  };

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
    </nav>
  );
};

export default SearchBar;
