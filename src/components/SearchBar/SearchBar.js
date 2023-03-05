import React from "react";

import "./SearchBar.css";

export default function SearchBar(props) {
  return (
    <form className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </form>
  );
}
