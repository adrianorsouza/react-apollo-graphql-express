import SearchBox from "./SearchBox";
import React from "react";

const Header = (props) => {
  return (
    <header>
      <h1 className="text-lg pt-5">Social</h1>
      <SearchBox />
    </header>
  );
};

export default Header;
