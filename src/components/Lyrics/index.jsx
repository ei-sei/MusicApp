import { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_API_KEY;

export default function Lyrics() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    async function getTracks() {
      try {
        // Get Elton John's albums
        const artistId = 262; // Elton John's artist ID in Musixmatch API
        const albumsUrl = `https://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=${artistId}&apikey=${API_KEY}`;
        const albumsResponse = await fetch(albumsUrl);
        const albumsResult = await albumsResponse.json();
        const albumIds = albumsResult.message.body.album_list.map((album) => album.album.album_id);

        // Get tracks for each album
        const tracksPromises = albumIds.map(async (albumId) => {
          const tracksUrl = `https://api.musixmatch.com/ws/1.1/album.tracks.get?album_id=${albumId}&apikey=${API_KEY}`;
          const tracksResponse = await fetch(tracksUrl);
          const tracksResult = await tracksResponse.json();
          return tracksResult.message.body.track_list;
        });
        const tracksResults = await Promise.all(tracksPromises);
        const tracks = tracksResults.flat();

        setTracks(tracks);
      } catch (error) {
        console.log(error);
      }
    }

    getTracks();
  }, []);

  return (
    <div>
      <h2>All Elton John Tracks:</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track.track.track_id}>{track.track.track_name}</li>
        ))}
      </ul>
    </div>
  );
}
