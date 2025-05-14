export async function searchSongs(term) {

  const tracks = [
    {
      id: 1,
      name: "Song 1",
      artist: "Artist 1",
      album: "Album 1",
    },
    {
      id: 2,
      name: "Song 2",
      artist: "Artist 2",
      album: "Album 2",
    },
    {
      id: 3,
      name: "Song 3",
      artist: "Artist 3",
      album: "Album 3",
    },
    {
      id: 4,
      name: "Song 4",
      artist: "Artist 4",
      album: "Album 4",
    },
    {
      id: 5,
      name: "Song 5",
      artist: "Artist 5",
      album: "Album 5",
    },
    {
      id: 6,
      name: "Song 6",
      artist: "Artist 6",
      album: "Album 6",
    },
    {
      id: 7,
      name: "Song 7",
      artist: "Artist 7",
      album: "Album 7",
    },
    {
      id: 8,
      name: "Song 8",
      artist: "Artist 8",
      album: "Album 8",
    },
    {
      id: 9,
      name: "Song 9",
      artist: "Artist 9",
      album: "Album 9",
    },
    {
      id: 10,
      name: "Song 10",
      artist: "Artist 10",
      album: "Album 10",
    },
  ]
  // perform the search
  const filteredTracks = tracks.filter((track) => {
    return (
      track.name.toLowerCase().includes(term.toLowerCase()) ||
      track.artist.toLowerCase().includes(term.toLowerCase()) ||
      track.album.toLowerCase().includes(term.toLowerCase())
    );
  });
  // simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // return the filtered tracks
  return filteredTracks;
}