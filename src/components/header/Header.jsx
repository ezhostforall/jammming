import React from "react";
import SearchBar from "../searchbar/SearchBar";
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import "./Header.css"; // Assuming you have a CSS file for styling

const Header = () => {
    return (
        <header>
            <div className="logo">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <SearchBar />
        </header>
    )
};

export default Header;
