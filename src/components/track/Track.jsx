import React from "react";

import Button from "../button/Button"; // Import your Button component

const Track = ({ track, addTrackToPlaylist, removeTrackFromPlaylist }) => {
    console.log(track);
    return (
        <div className="track-info" key={track.id}>
            <img src={track.image} alt={track.name} />
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
            
            {track.preview && (
                <audio controls>
                    <source src={track.preview} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>
    );
}
export default Track;