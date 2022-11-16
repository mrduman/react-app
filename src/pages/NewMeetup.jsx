import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetup() {

    function addMeetupHandler(meetupData) {

        fetch(
            "https://react-getting-started-dbcc7-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(() => {
            document.location.href = "/";
        });
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>;
}