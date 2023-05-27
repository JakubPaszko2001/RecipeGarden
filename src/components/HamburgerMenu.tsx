import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { auth } from "../config/firebase";

interface Props {
  hamburgerMenu: boolean;
  setHamburgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu = ({ hamburgerMenu, setHamburgerMenu }: Props) => {
  const navigate = useNavigate();
  const navigateToShoppingList = () => {
    navigate(`/shoppinglist`);
  };

  const logout = () => {
    return auth.signOut();
  };

  return (
    <nav
      className={`w-full h-screen fixed ${
        hamburgerMenu ? "top-[0%]" : "top-[-100vh]"
      } left-0 bg-mainGreen ease-in duration-300 text-white z-50`}
    >
      <div className="h-[10vh] w-full flex justify-end items-center p-4">
        <button>
          <AiOutlineClose
            onClick={() => setHamburgerMenu(false)}
            className="text-3xl"
          />
        </button>
      </div>
      <div className="h-[30vh] w-full flex flex-col justify-center items-center gap-4">
        <div className="w-[125px] h-[125px] bg-white rounded-full"></div>
        <p className="text-3xl">UserName</p>
      </div>
      <div className="w-full flex flex-col justify-start items-center text-2xl mt-12">
        <p
          onClick={() => {
            navigateToShoppingList();
          }}
          className="cursor-pointer"
        >
          Shopping List
        </p>
        <p className="cursor-pointer">Favorite</p>
      </div>
      <div className="w-full flex justify-center">
        <button
          data-cy="logoutButton"
          onClick={() => logout()}
          className="button border-white"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
