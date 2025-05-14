import React from "react";
import "./Logo.css"; // Import your CSS file for styling

const Logo = ({ src, alt, className, type = "text" }) => {
    return (
        <div className={`logo ${className}`}>
        {type === "text" ? (
            <span>{alt}</span>
        ) : (
            <img src={src} alt={alt} className="logo-image" />
        )}
        </div>
    );
}

export default Logo;