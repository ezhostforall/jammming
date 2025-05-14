import React, { useState } from "react";
import Button from "../button/Button"; // Import your Button component
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
      setSearchTerm("");
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
        placeholder="Search..."
      />
      <Button onClick={() => { onSearch(searchTerm); setSearchTerm(""); }} className="primary">
        Search
      </Button>
      <Button onClick={() => { setSearchTerm(""); }} className="outline">
        Clear
      </Button>
    </div>
  );
};

export default SearchBar;