import React from "react";
import "./TrackList.css";
import Track from "../track/Track"; // Import your Track component



const TrackList = ( {tracks=[], addTrackToPlaylist, removeTrackFromPlaylist} ) => {
    
    return (
        <div className="track-list">
            
            {tracks.map(track => (
                <div key={track.id}> 
                    <Track 
                    track={track} 
                    addTrackToPlaylist={addTrackToPlaylist} 
                    removeTrackFromPlaylist={removeTrackFromPlaylist} 
                    />
                </div>
            ))}
        </div>
    )
}
export default TrackList;