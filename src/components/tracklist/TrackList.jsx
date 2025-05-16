import React from "react";
import "./TrackList.css";
import Track from "../track/Track"; // Import your Track component



const TrackList = ( {tracks=[]} ) => {
    return (
        <div className="track-list">
            {tracks.map(track => (
                <Track key={track.id} title={track.name} artist={track.artist} album={track.album} />
            ))}
        </div>
    )
}
export default TrackList;