import React from "react";

import Button from "../button/Button";

import "./SearchResults.css"; // Import your CSS file for styling

const SearchResults = ({ results = [], onAdd, onRemove, onSave }) => {
  if (!results.length) {
    return (
      <div className="search-results">
        <p>No results found.</p>
      </div>
    );
  }

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <ul>
        {results.map((track) => (
          <li key={track.id} className="search-result-item">
            <div>
              <strong>{track.name}</strong> by {track.artist} &mdash; {track.album}
            </div>
            {onAdd && (
              <Button className="primary" onClick={() => onAdd(track)}>
                Add to Playlist
              </Button>
            )}
            {onRemove && (
              <Button className="warning" onClick={() => onRemove(track)}>
                Remove from Playlist
              </Button>
            )}
          </li>
        ))}
      </ul>
      {onSave && (
              <Button className="success" onClick={onSave}>
                Save Playlist
              </Button>
            )}

    </div>
  );
};

export default SearchResults;