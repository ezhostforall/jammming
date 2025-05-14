import React from 'react';
import './App.css'
import { useState } from 'react';
import { searchSongs } from './utils/search-utils';

import Header from './components/header/Header'
import SearchResults from './components/searchresults/SearchResults';

function App() {
    const [results, setResults] = useState([]);

    const handleSearch = async (term) => {
    const tracks = await searchSongs(term);
    setResults(tracks);
    };
    return (
        <>
          <Header handleSearch={handleSearch} />
          <SearchResults results={results} />
        </>
  )
}

export default App
