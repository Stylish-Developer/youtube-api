import { useState } from "react";
import { Input } from "../ui/input";

import SearchSvg from "../../assets/svg/search-outline.svg";

import "../../assets/css/searchB.css";

// --> search component
const SearchBox = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <div className="SearchBContainer">
        <div className="innerDiv">
          <img
            src={SearchSvg}
            height={20}
            width={20}
            alt="searchIcon"
            className="searchIcon"
          />
          <Input
            name={inputText}
            value={inputText}
            onChange={handleChange}
            placeholder="Search"
          />
        </div>
      </div>
    </>
  );
};

export default SearchBox;
