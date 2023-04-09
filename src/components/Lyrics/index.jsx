
import { useState, useEffect } from 'react';


const API_KEY = import.meta.env.VITE_API_KEY

export default function Lyrics() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    async function getTracks() {
      try {
        const url = `https://api.musixmatch.com/ws/1.1/track.search?q_artist=Elton%20John&page_size=100&apikey=${API_KEY}`;
        const response = await fetch(url);
        const result = await response.json();
        setTracks(result.message.body.track_list);
      } catch (error) {
        console.log(error);
      }
    }
  
    getTracks();
    console.log(tracks)
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
