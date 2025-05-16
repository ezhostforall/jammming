import React from "react";
import "./Playlist.css";
import TrackList from "../tracklist/TrackList";
import Button from "../button/Button"; // Import your Button component

const Playlist = ({ playlistTracks }) => {
    return (
        <div className="playlist container">
            <h2>Your Playlist</h2>
            <TrackList tracks={playlistTracks} />
            <Button type="button" className='save-to-spotify-button'>Save to Spotify</Button>
        </div>
    );
}
export default Playlist;