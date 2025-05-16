import React from "react";
import "./SearchResults.css";
import TrackList from "../tracklist/TrackList"; // Import your TrackList component


const SearchResults = ({searchResults, addTrackToPlaylist}) => {

  return (
    <div className="search-results container">
      <h2>Search Results</h2>
      <TrackList tracks={searchResults} addTrackToPlaylist={addTrackToPlaylist} />
    </div>
  );
}
export default SearchResults;