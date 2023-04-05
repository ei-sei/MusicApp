import './Album.css';

export default function Album(props) {
  const { title, coverImage, tracks } = props;

  return (
    <div>
      <h3>{title}</h3>
      <img src={coverImage} alt={title} />
      <ul>
        {tracks.map(function (track, index) {
          return <li key={index}>{track}</li>;
        })}
      </ul>
    </div>
  );
}

