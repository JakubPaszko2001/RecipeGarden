import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileNav = ({
  setHamburgerMenu,
  setSearchBar,
}: {
  setHamburgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <div className="flex items-center">
        <button aria-label="Search for dish">
          <AiOutlineSearch
            onClick={() => {
              setSearchBar(true);
              disableScroll();
            }}
            className="text-3xl mr-1"
          />
        </button>
        <button data-cy="openHamburgerMenu" aria-label="Open Menu">
          <GiHamburgerMenu
            onClick={() => setHamburgerMenu(true)}
            className="text-3xl"
          />
        </button>
      </div>
    </>
  );
};

export default MobileNav;
