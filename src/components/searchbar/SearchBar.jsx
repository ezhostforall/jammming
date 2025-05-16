import React, {useState} from "react";
import Button from "../button/Button"; // Import your Button component
import "./SearchBar.css";

const SearchBar = ( {searchSongs, setSearchResults}) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearch = async () => {
    const results = await searchSongs(searchTerm);
    setSearchResults(results);
    console.log(results);
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        className="search-bar-input"
        type="text"
        placeholder="Search for a song..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
      />
      <Button type="button" className="search-bar-button" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}

export default SearchBar;