import React from "react";
import { useRef } from "react";
import "./index.css";
import Input from "../Input/index";
import Button from "../Button/index";

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
        <i class="fa-solid fa-magnifying-glass"></i>
      </Button>
    </form>
  );
};

export default Search;
