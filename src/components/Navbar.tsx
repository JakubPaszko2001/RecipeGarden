import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = React.useState<boolean>(false);

  return (
    <nav className="h-[10vh] w-full fixed top-0 left-0 flex justify-between items-center p-4 bg-white">
      <h1 className="text-3xl">
        Recipe<span className="text-mainGreen">Garden</span>
      </h1>
      <MobileNav setHamburgerMenu={setHamburgerMenu} />
      <HamburgerMenu
        hamburgerMenu={hamburgerMenu}
        setHamburgerMenu={setHamburgerMenu}
      />
    </nav>
  );
};

export default Navbar;
