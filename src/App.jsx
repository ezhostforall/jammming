import React from 'react';
import './App.css'
import { useState } from 'react';
import { searchSongs } from './utils/search-utils';

import Header from './components/header/Header'
import SearchResults from './components/searchresults/SearchResults';

function App() {
    const [results, setResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async (term) => {
    const tracks = await searchSongs(term);
    setResults(tracks);
    setHasSearched(true);
    };

    const handleAdd = (track) => {
        // Logic to add the track to a playlist or perform any other action
        console.log(`Adding track: ${track.name}`);
    };
    const handleRemove = (track) => {
        // Logic to remove the track from a playlist or perform any other action
        console.log(`Removing track: ${track.name}`);
    };
    const handleSave = () => {
        // Logic to save the playlist or perform any other action
        console.log('Saving playlist...');
    };
    return (
        <>
          <Header handleSearch={handleSearch} />
          <div className="column-section">
            <div>
              {hasSearched && <SearchResults results={results} onAdd={handleAdd} onRemove={handleRemove} />}
            </div>
            <div>
              {hasSearched && <SearchResults results={results} onRemove={handleRemove} onSave={handleSave} />}
            </div>
          </div>
          
        </>
  )
}

export default App
