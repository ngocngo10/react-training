import React from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import Input from "../Input/index";
import Button from "../Button/index";

fontawesome.library.add(faMagnifyingGlass);

const Search = () => {
  const searchInput = useRef();

  return (
    <form className="search-form">
      <Input
        type="text"
        className="search-input"
        name="search-input"
        id="search-input"
        placeholder="Bạn tìm gì"
        nameRef={searchInput}
      />
      <Button type="submit" className="btn-search-submit">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </Button>
    </form>
  );
};

export default Search;
