import React from "react";
import"./Track.css";
import Button from "../button/Button"; // Import your Button component

const Track = ({ id, title, artist, album }) => {

    return (
        <div className="track-info" key={id}>
            <h3>{title}</h3>
            <p>{artist}</p>
            <p>{album}</p>
            <Button type='button' className='track-button'>+</Button>
        </div>
    );
}
export default Track;