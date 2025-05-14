export async function searchSongs(term) {
  // return a promise that resolves to an array of song objects using dummy data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
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
      ]);
    }, 1000);
  });
}