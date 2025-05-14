import React from "react";
import "./Button.css"; // Import your CSS file for styling

const Button = ({
    label,
    onClick,
    type = "button",
    disabled = false,
    style = {},
    className = "",
    children,
    ...props
}) => (
    <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        style={style}
        className={className}
        {...props}
    >
        {children || label}
    </button>
);

export default Button;