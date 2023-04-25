import { useState } from "react";
import { Input } from "../ui/input";

import SearchSvg from "../../assets/svg/search-outline.svg";

import "../../assets/css/searchB.css";

// --> search component
const SearchBox = (props) => {
  const { inputText, setInputText, handleChange, handleSubmit } = props;

  return (
    <>
      <div className="SearchBContainer">
        <form onSubmit={handleSubmit}>
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
          <button type="submit">search</button>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
