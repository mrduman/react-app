import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

export default function AllMeetupsPage() {

    const [isLoading, toggleIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        toggleIsLoading(true);
        fetch(
            "https://react-getting-started-dbcc7-default-rtdb.firebaseio.com/meetups.json"
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const meetups = [];

                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    };
                    meetups.push(meetup);
                }
                toggleIsLoading(false);
                setLoadedMeetups(meetups);
            })
    }, []);

    if (isLoading) {
        return (
            "Loading..."
        )
    };

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
}