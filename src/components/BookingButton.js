import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const BookingButton= () => {
    return (
        <Link to='events'>
        <Button>Book a Tour!</Button>
        </Link>
    )
}

export default BookingButton;
