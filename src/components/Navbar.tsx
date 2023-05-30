import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import MobileNav from "./MobileNav";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = React.useState<boolean>(false);
  const [searchBar, setSearchBar] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate(`/`);
  };

  return (
    <nav className="h-[10vh] w-full fixed top-0 left-0 flex justify-between items-center p-4 bg-white z-50">
      <h1
        onClick={() => {
          navigateToHome();
        }}
        className="text-3xl cursor-pointer"
      >
        Recipe<span className="text-mainGreen">Garden</span>
      </h1>
      <MobileNav
        setHamburgerMenu={setHamburgerMenu}
        setSearchBar={setSearchBar}
      />
      <HamburgerMenu
        hamburgerMenu={hamburgerMenu}
        setHamburgerMenu={setHamburgerMenu}
      />
      <SearchBar searchBar={searchBar} setSearchBar={setSearchBar} />
    </nav>
  );
};

export default Navbar;
