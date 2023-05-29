import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Header = ({ pageTitle, handleSearchKeyword }) => {
  const [searchBoxVisible, setSearchBoxVisible] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  // console.log("search keyword", searchKeyword);

  const handleSearchBox = (e) => {
    //Function to handle text input in search box
    setSearchKeyword(e.target.value);
    handleSearchKeyword(e.target.value);
  };
  const handleBlur = () => {
    setSearchBoxVisible(false);
    setSearchKeyword("");
  };
  const handleSearch = () => {
    // functions handle search on clicking search icon
    setSearchBoxVisible(!searchBoxVisible);
    setSearchKeyword("");
    handleSearchKeyword(searchKeyword);
  };

  return (
    <div className=" px-7.5 z-10 fixed top-0 left-0 right-0 h-48 pb-9 flex justify-between bg-gradient-to-b from-dark from-50% to-transparent text-lg">
      <div className="h-full flex items-center gap-2">
        <FaArrowLeft title="backArrow" className="text-white" />
        <p className="text-white font-titillium font-">{pageTitle}</p>
      </div>
      <div className="h-full flex items-center gap-2 w-auto">
        <input
          className={`${!searchBoxVisible ? "hidden" : ""} rounded-sm p-1`}
          value={searchKeyword}
          type="search"
          placeholder="Search Here"
          name="search"
          id="search"
          onBlur={handleBlur}
          onChange={(e) => handleSearchBox(e)}
        />
        <FaSearch
          className="text-white"
          title="searchIcon"
          onClick={handleSearch}
          onMouseDown={(e) => e.preventDefault()}
        />
      </div>
    </div>
  );
};

export default Header;
