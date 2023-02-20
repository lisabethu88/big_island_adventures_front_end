import { Link } from "react-router-dom";
import "../App.css";
import "./Home.css";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { UserProvider, UserContext } from "../UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <main className="home-container">
      {/* <h1>Welcome, {user[0].name}!</h1> uncommand it after we run */}
      <article className="image-with-bookingButton text-center">
        <h1 className="home-title mb-5 mt-5">
          Are you ready for a Big Island Adventure?
        </h1>
        <Link to="/tours">
          <Button className="book-now-button" variant="secondary">
            Book Now!
          </Button>
        </Link>
      </article>
    </main>
  );
};

export default Home;
