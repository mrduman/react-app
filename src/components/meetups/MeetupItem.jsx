import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

export default function MeetupItem(props) {

    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);


    function toggleFavoritesStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id)
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                description: props.description
            })
        }
    };

    return (

        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>

                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <address>{props.address}</address>
                </div>

                <div className={classes.actions}>
                    <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite ? "Remove Favorite" : "To Favorite"}</button>
                </div>
            </Card>
        </li>

    )
}