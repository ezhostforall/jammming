# Jammming

Jammming is a React-based music playlist creation app built with Vite. It allows users to search for songs using the Deezer API, add them to a playlist, and save the playlist locally using the browser's local storage.

## Features

- **Search Songs**: Search for songs using the Deezer API.
- **Create Playlists**: Add songs to a playlist and manage the playlist by removing tracks or renaming it.
- **Save Playlists**: Save playlist locally using the browser's local storage.

## Project Setup

This project uses React with Vite for fast development and hot module replacement (HMR). It also includes ESLint for code linting.

## APIs Used

- **Deezer API**: Used for searching songs. The Spotify API was not used due to access limitations.

## How to Run the Project

1. Clone the repository:
    ```bash
    git clone https://github.com/ezhostforall/jammming.git
    cd jammming
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open the app in your browser at `http://localhost:5173`.

## How It Works

1. **Search for Songs**: Use the search bar to find songs by title, artist, or album. The app fetches results from the Deezer API.
2. **Add Songs to Playlist**: Click the "+" button next to a song to add it to your playlist.
3. **Manage Playlist**: Rename the playlist or remove songs using the "-" button.
4. **Save Playlist**: Save the playlist to local storage by clicking the "Save to Spotify" button (mocked functionality).

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Vite**: Build tool for fast development.
- **Deezer API**: For fetching song data.
- **Local Storage**: For saving playlists locally.

## Folder Structure

```
src/
├── components/       # Reusable React components
├── utils/            # Utility functions
├── App.jsx           # Main application component
├── main.jsx          # Entry point for the app
├── index.css         # Global styles
```

## Future Enhancements

- Integrate Spotify API for saving playlists directly to Spotify.
- Add user authentication for personalized playlists.
- Improve UI/UX with advanced styling and animations.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Deezer API](https://developers.deezer.com/api)
- [Vite](https://vitejs.dev/)