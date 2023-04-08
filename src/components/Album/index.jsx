import React from 'react';
import './Album.css';

export default function Album({ albums }) {
  return (
    <div className="album-container">
      {albums.map((album, index) => (
        <div className="album" key={index}>
          <h3>{album.title}</h3>
          <img src={album.coverImage} alt={`Cover for ${album.title}`} />
          {/* <ul>
            {album.tracks.map((track, index) => (
              <li key={index}>{track}</li>
            ))}
          </ul> */}
        </div>
      ))}
    </div>
  );
}
