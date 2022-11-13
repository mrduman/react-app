import classes from "./MeetupItem.module.css";

export default function MeetupItem(props) {

    return (

        <li>
            <div className={classes.item}>
                <img src={props.image} alt={props.title} />
            </div>

            <div className={classes.content}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <address>{props.address}</address>
            </div>

            <div>
                <button>To Favorites</button>
            </div>
        </li>

    )
}