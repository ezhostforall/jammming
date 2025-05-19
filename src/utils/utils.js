// Named utility functions for track, search, and playlist management
// This file contains utility functions for searching songs, managing playlists, and handling track selection.

// Dummy track data
// This is a mock data set of tracks that can be used for testing and development purposes.
/*
export async function searchSongs(term) {

  const tracks = [
    {
      id: 1,
      name: "Song 1",
      artist: "Artist 1",
      album: "Album 1",
      uri: "spotify:track:1"
    },
    {
      id: 2,
      name: "Song 2",
      artist: "Artist 2",
      album: "Album 2",
      uri: "spotify:track:2"
    },
    {
      id: 3,
      name: "Song 3",
      artist: "Artist 3",
      album: "Album 3",
      uri: "spotify:track:3"
    },
    {
      id: 4,
      name: "Song 4",
      artist: "Artist 4",
      album: "Album 4",
      uri: "spotify:track:4"
    },
    {
      id: 5,
      name: "Song 5",
      artist: "Artist 5",
      album: "Album 5",
      uri: "spotify:track:5"
    },
    {
      id: 6,
      name: "Song 6",
      artist: "Artist 6",
      album: "Album 6",
      uri: "spotify:track:6"
    },
    {
      id: 7,
      name: "Song 7",
      artist: "Artist 7",
      album: "Album 7",
      uri: "spotify:track:7"
    },
    {
      id: 8,
      name: "Song 8",
      artist: "Artist 8",
      album: "Album 8",
      uri: "spotify:track:8"
    },
    {
      id: 9,
      name: "Song 9",
      artist: "Artist 9",
      album: "Album 9",
      uri: "spotify:track:9"
    },
    {
      id: 10,
      name: "Song 10",
      artist: "Artist 10",
      album: "Album 10",
      uri: "spotify:track:10"
    },
  ];
  // perform the search
  const searchResults = tracks.filter((track) => {
    return (
      track.name.toLowerCase().includes(term.toLowerCase()) ||
      track.artist.toLowerCase().includes(term.toLowerCase()) ||
      track.album.toLowerCase().includes(term.toLowerCase())
    );
  });
  // simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // return the filtered tracks
  console.log(searchResults);
  return searchResults;
}
*/

export async function searchSongs(term) {
  const response = await fetch(
    `https://deezerdevs-deezer.p.rapidapi.com/search?q=${encodeURIComponent(term)}`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9a20e585d8msh10997575b3bea09p1d658ajsn456fb75ca94d', // Replace with your actual key
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
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
  }));
}