import "../App.css";
import SecNav from "../components/SecNav";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const page = "confirm";

const ConfirmBooking = () => {
  return (
    <main>
      <section>
        <SecNav page={page} />
      </section>
      <Link to="/dashboard">
        <Button variant="secondary" className="go-back-btn">
          testing to dashboard
        </Button>
      </Link>
    </main>
  );
};

export default ConfirmBooking;
