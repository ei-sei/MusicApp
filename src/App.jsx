import React, { useState } from 'react';
import './App.css';
import {Album, Bio } from './components';

function App() {
  const bio = "Elton John is one of the most iconic and successful musicians of all time, having sold over 300 million records in his career. With his distinctive voice and flamboyant stage presence, he has created a vast and varied discography that spans multiple decades and genres, from classic rock to pop ballads and musical theater. Throughout his career, Elton has collaborated with some of the most talented musicians and songwriters in the industry, including Bernie Taupin, who has been his primary lyricist since the early 1970s. His impact on popular music is immeasurable, and his legacy as a performer and songwriter continues to inspire generations of fans and fellow musicians alike.";
  const album = {
    title: 'Goodbye Yellow Brick Road',
    coverImage: 'https://upload.wikimedia.org/wikipedia/en/8/86/Elton_John_-_Goodbye_Yellow_Brick_Road.jpg',
    tracks: ['Funeral for a Friend/Love Lies Bleeding', 'Candle in the Wind', 'Bennie and the Jets', 'Goodbye Yellow Brick Road', 'This Song Has No Title', 'Grey Seal', 'Jamaica Jerk-Off', 'I\'ve Seen That Movie Too', 'Sweet Painted Lady', 'The Ballad of Danny Bailey (1909-34)', 'Dirty Little Girl', 'All the Girls Love Alice', 'Your Sister Can\'t Twist (But She Can Rock \'n Roll)', 'Saturday Night\'s Alright for Fighting', 'Roy Rogers', 'Social Disease', 'Harmony'],
  };

  return (
    <div>
      <Bio name="Elton John" bio={bio} />
      <Album title={album.title} coverImage={album.coverImage} tracks={album.tracks} />
    </div>
  );
}

export default App;
