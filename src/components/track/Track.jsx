import React from "react";
import"./Track.css";
import Button from "../button/Button"; // Import your Button component

const Track = ({ id, title, artist, album, addTrackToPlaylist, removeTrackFromPlaylist 
}) => {
    return (
        <div className="track-info" key={id}>
            <h3>{title}</h3>
            <p>{artist}</p>
            <p>{album}</p>
            
            {addTrackToPlaylist && (
                <Button type="button" className="add-to-playlist-button" onClick={() => addTrackToPlaylist({id, title, artist, album})}>
                    +
                </Button>
            )}
            {removeTrackFromPlaylist && (
                <Button type="button" className="remove-from-playlist-button" onClick={() => removeTrackFromPlaylist(id)}>
                    -
                </Button>
            )}
        </div>
    );
}
export default Track;