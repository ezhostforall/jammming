import React from "react";
import SearchBar from "../searchbar/SearchBar";
import Logo from "../logo/Logo";

import "./Header.css"; // Assuming you have a CSS file for styling


const Header = ( { handleSearch }) => {
    

    return (
        <header>
            <Logo alt="Jammming" className="header-logo" type="text" />
            <SearchBar onSearch={handleSearch} />
        </header>
    )
};

export default Header;
