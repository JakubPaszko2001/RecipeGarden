import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileNav = ({
  setHamburgerMenu,
}: {
  setHamburgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className="flex items-center">
        <button>
          <AiOutlineSearch className="text-3xl mr-1" />
        </button>
        <button>
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
