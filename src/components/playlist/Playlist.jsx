import React from "react";
import "./Playlist.css";
import TrackList from "../tracklist/TrackList";
import Button from "../button/Button"; // Import your Button component

const Playlist = ({ playlistTracks, playlistName, setPlaylistName, removeTrackFromPlaylist, savePlaylistToSpotify }) => {

    const handlePlaylistNameChange = (event) => {
        // Handle the change in playlist name here
        setPlaylistName(event.target.value);
    }
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handlePlaylistNameChange(event);
        }
    };
    const handleInputChange = (event) => {
        handlePlaylistNameChange(event);
    };

    return (
        <div className="playlist container">
            <h2>Your Playlist</h2>
            <div className="playlist-header">
                <input
                type="text"
                className="playlist-name-input"
                placeholder="Playlist Name"
                onChange={handleInputChange}
                onKeyUp={handleKeyPress}
                value={playlistName}
                />
            </div>
            <TrackList tracks={playlistTracks} removeTrackFromPlaylist={removeTrackFromPlaylist} />
            <Button type="button" className='save-to-spotify-button' onClick={savePlaylistToSpotify}>Save to Spotify</Button>
        </div>
    );
}
export default Playlist;