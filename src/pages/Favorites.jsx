import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

export default function Favorites() {
    const favoriteCtx = useContext(FavoritesContext);

    let content;

    if (favoriteCtx.totalFavorites === 0) {
        content = <p>You got no favorites. Start adding some?</p>;
    } else {
        content = <MeetupList meetups={favoriteCtx.favorites} />;
    }


    return <div>
        <h1>Favorites Page </h1>
        {content}
    </div>;
}