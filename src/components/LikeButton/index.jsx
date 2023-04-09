import './LikeButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function LikeButton(props) {
    return (
        <div>
            <button className="like-button" onClick={props.onClick}>
                <FontAwesomeIcon icon={faHeart} /> {props.likes}
            </button>
        </div>
        
    );
}


