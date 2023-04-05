import React from 'react';

export default function Album({ albums }) {
  return (
    <div>
      {albums.map((album, index) => (
        <div key={index}>
          <h3>{album.title}</h3>
          <img src={album.coverImage} alt={`Cover for ${album.title}`} />
          <ul>
            {album.tracks.map((track, index) => (
              <li key={index}>{track}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

