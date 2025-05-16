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
  const [playlistTracks, setPlaylistTracks] = useState([]);
    return (
        <>
          <>
            <Header />
          </>
          <SearchBar searchSongs={searchSongs} setSearchResults={setSearchResults} />
          <div className="grid-container">
              <SearchResults searchResults={searchResults} />
              <Playlist playlistTracks={playlistTracks} />
          </div>
        </>
  )
}

export default App
