import './Bio.css';

export default function Bio({name, bio}) {

  return (
    <div>
      <h2>{name}</h2>
      <p role="summary">{bio}</p>
    </div>
  );
}

