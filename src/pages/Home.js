import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
import './Home.css'
import Button from "react-bootstrap/Button";
import bg from "../images/pexels-photo-416676.jpeg"

const Home = () => (
  <main className="home-container">
    <article className="image-with-bookingButton text-center">
    <h1 className="home-title mb-5 mt-5">Are you ready for a Big Island Adventure?</h1>
    <Link to="/events">
      <Button className="book-now-button" variant="secondary">
        Book Now!
      </Button>
    </Link>
    </article>
  </main>
);

export default Home;