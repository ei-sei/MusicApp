import './LikeButton.css'

export default function LikeButton(props) {
    return (
        <div>
            <button onClick={props.onClick}> Like: {props.likes} </button>

        </div>
    )
}