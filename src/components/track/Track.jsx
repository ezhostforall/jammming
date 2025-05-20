import React from "react";
import"./Track.css";
import Button from "../button/Button"; // Import your Button component

const Track = ({ track, addTrackToPlaylist, removeTrackFromPlaylist }) => {
    return (
        <div className="track-info" key={track.id}>
            <h3>{track.name}</h3>
            <p>{track.artist}</p>
            <p>{track.album}</p>
            {addTrackToPlaylist && (
                <Button type="button" className="outline" onClick={() => addTrackToPlaylist(track)}>
                    +
                </Button>
            )}
            {removeTrackFromPlaylist && (
                <Button type="button" className="outline" onClick={() => removeTrackFromPlaylist(track.id)} >
                    -
                </Button>
            )}
        </div>
    );
}
export default Track;