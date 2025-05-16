import React from "react";
import "./Playlist.css";
import TrackList from "../tracklist/TrackList";

const Playlist = ({ playlistTracks }) => {
    return (
        <div className="playlist container">
            <h2>Your Playlist</h2>
            <TrackList tracks={playlistTracks} />
        </div>
    );
}
export default Playlist;