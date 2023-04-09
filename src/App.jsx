import React, { useState, useEffect } from 'react';
import './App.css';
import data from './assets/albums.json'
import { Album, Bio, Lyrics } from './components';


export default function App() {
  const [bio, setBio] = useState("Sir Elton Hercules John CH CBE is an English singer, songwriter, pianist, and composer. He has worked with lyricist Bernie Taupin since 1967; they have collaborated on more than 30 albums. John has sold more than 300 million records, making him one of the best-selling music artists in the world.");
  const [albums, setAlbums] = useState(data);

  return (
    <div>
      <Bio name="Elton John" bio={bio} />
      <Album albums={albums} />
      <Lyrics/>
    </div>
  );
}

