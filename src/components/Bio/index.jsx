import './Bio.css';

export default function Bio({ name, bio }) {
  return (
    <div>

      <p role="summary">{bio}</p>
    </div>
  );
}

