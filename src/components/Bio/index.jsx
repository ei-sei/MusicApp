import './Bio.css';

export default function Bio({ name, bio }) {
  return (
    <div>
      <h1>{name}</h1>
      <p role="summary">{bio}</p>
    </div>
  );
}

