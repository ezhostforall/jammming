import React from "react";

import "./SearchResults.css"; // Import your CSS file for styling

const SearchResults = ({ results = [], onAdd }) => {
  if (!results.length) {
    return (
      <div className="search-results">
        <p>No results found.</p>
      </div>
    );
  }

  return (
    <div className="search-results">
      <ul>
        {results.map((track) => (
          <li key={track.id} className="search-result-item">
            <div>
              <strong>{track.name}</strong> by {track.artist} &mdash; {track.album}
            </div>
            {onAdd && (
              <button className="primary" onClick={() => onAdd(track)}>
                Add
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;