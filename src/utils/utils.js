// Named utility functions for track, search, and playlist management
// This file contains utility functions for searching songs, managing playlists, and handling track selection.



// Deezer Search Function
// This function searches for songs on Deezer using the Deezer API.
// It takes a search term as input and returns an array of song objects with relevant details.
export async function searchSongs(term) {
  const response = await fetch(
    `https://deezerdevs-deezer.p.rapidapi.com/search?q=${encodeURIComponent(term)}`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST
      }
    }
  );
  const json = await response.json();
  
  return json.data.map(track => ({
    id: track.id,
    name: track.title,
    artist: track.artist.name,
    album: track.album.title,
    uri: track.link,
    image: track.album.cover_medium,
    preview: track.preview,
  }));
}