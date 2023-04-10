import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Albums() {
  const {id} = useParams();
  const navigate = useNavigate();
 
  useEffect(() => {
    fetchItems()
  }, [])

  const [item, setItem] = useState({ images: {} });

  const fetchItems = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.com/v2/cosmetics/br/${id}`
    );
    const item = await fetchItem.json();
    setItem(item.data)
    console.log(item);
  };

  return (
    <div>
      <button onClick={() => navigate("/shop")}>Back to shop</button>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <img src={item.images.icon} />
    </div>
  );
}

export default Albums;
