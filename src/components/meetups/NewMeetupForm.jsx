import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css"

export default function NewMeetupForm() {

    return (
        <Card>
            <form className={classes.form} action="submit">
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <input type="text" required id="title" />
                </div>

                <div className={classes.control}>
                    <label htmlFor="image">Image</label>
                    <input type="url" required id="image" />
                </div>

                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id="address" />
                </div>

                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" rows="5" required></textarea>
                </div>

                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}