import React, { useState } from 'react';
import './App.css'

import Header from './components/header/Header';
import SearchBar from './components/searchbar/SearchBar';
import Playlist from './components/playlist/Playlist';
import SearchResults from './components/searchresults/SearchResults';
import Button from './components/button/Button';

import { searchSongs } from './utils/utils'


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState(localStorage.getItem('playlist') ? JSON.parse(localStorage.getItem('playlist')) : []);
  const [playlistName, setPlaylistName] = useState(localStorage.getItem('playlistName') ? localStorage.getItem('playlistName') : 'My Playlist');

  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.some((t) => t.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
      
    }
  }
  const removeTrackFromPlaylist = (trackId) => {
    setPlaylistTracks(playlistTracks.filter((track) => track.id !== trackId));
  }
  const savePlaylistToSpotify = () => {
    // Logic to save the playlist to Spotify
    console.log("Saving playlist to Spotify...");
    localStorage.setItem('playlist', JSON.stringify(playlistTracks));
    localStorage.setItem('playlistName', playlistName);
  }

    return (
        <>
          <>
            <Header />
          </>
          <SearchBar searchSongs={searchSongs} setSearchResults={setSearchResults} />
          <div className="grid-container">
              <SearchResults searchResults={searchResults} addTrackToPlaylist={addTrackToPlaylist} />
              <Playlist playlistTracks={playlistTracks} playlistName={playlistName} setPlaylistName={setPlaylistName} removeTrackFromPlaylist={removeTrackFromPlaylist} savePlaylistToSpotify={savePlaylistToSpotify} />
          </div>
        </>
  )
}

export default App
