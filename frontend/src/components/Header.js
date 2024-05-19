import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="h-16 shadow-md">
      <div className="h-full container mx-auto flex items-center px-4">
        <div className="">
          <Logo w={100} h={80} />
        </div>
      </div>
    </header>
  );
};

export default Header;
