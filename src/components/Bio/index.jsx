import './Bio.css';

export default function Bio({ name, bio }) {
  return (
    <div>

      <p id="bio-summary" role="summary">{bio}</p>
    </div>
  );
}

