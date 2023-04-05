import './Bio.css';

export default function Bio(props) {
  const { name, bio } = props;

  return (
    <div>
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

