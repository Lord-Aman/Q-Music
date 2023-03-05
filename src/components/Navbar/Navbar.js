import React, { useState } from "react";
import Button from "../Button/Button";
import Logo from "../../assets/Logo.png";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";

function Navbar() {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="navbar">
      <img src={Logo} alt="logo" />
      <SearchBar
        placeholder="Search for songs and albums..."
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <Button variant="primary" text="Give Feedback" />
    </div>
  );
}

export default Navbar;
