import React from "react";
import "./TrackList.css";
import Track from "../track/Track"; // Import your Track component



const TrackList = ( {tracks=[], addTrackToPlaylist, removeTrackFromPlaylist} ) => {
    
    return (
        <div className="track-list">
            {tracks.map(track => (
                <div key={track.id}> 
                    <Track 
                    id={track.id} 
                    title={track.name} 
                    artist={track.artist} 
                    album={track.album} 
                    addTrackToPlaylist={addTrackToPlaylist} 
                    removeTrackFromPlaylist={removeTrackFromPlaylist} 
                    />
                </div>
            ))}
        </div>
    )
}
export default TrackList;