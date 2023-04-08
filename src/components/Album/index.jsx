import { useState } from 'react';
import './Album.css';
import LikeButton from '../LikeButton';

export default function Album({ albums }) {
  // Create an array of likes state variables with initial value 0 for each album
  const [likes, setLikes] = useState(albums.map(() => 0));

  const handleLike = (index) => {
    // Create a copy of the likes array and update the like for the specific album
    const updatedLikes = [...likes];
    updatedLikes[index] += 1;
    setLikes(updatedLikes);
  };

  return (
    <div className="album-container">
      {albums.map((album, index) => (
        <div className="album" key={index}>
          <h3>{album.title}</h3>
          <img src={album.coverImage} alt={`Cover for ${album.title}`} />
          <LikeButton likes={likes[index]} onClick={() => handleLike(index)} />
        </div>
      ))}
    </div>
  );
}