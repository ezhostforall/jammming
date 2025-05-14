import React from "react";
import { useState } from "react";
import "./SearchBar.css"; // Assuming you have a CSS file for styling
// This component is a search bar that allows users to input a search term.
// When the user presses "Enter" or clicks the search button, it triggers a search function.
// The search term is cleared after the search is initiated.
// The component also includes a clear button to reset the search term.
// The component uses React hooks to manage the state of the search term.
// The component accepts a prop `onSearch` which is a function to be called with the search term.
// The component is styled using a CSS file.
// The component is exported as the default export of the module.

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
      <button onClick={() => { onSearch(searchTerm); setSearchTerm(""); }}>
        Search
      </button>
      <button onClick={() => { setSearchTerm(""); }}>
        Clear
      </button>
    </div>
  );
}
export default SearchBar;