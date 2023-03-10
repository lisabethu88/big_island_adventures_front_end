import EventCard from "./EventCard";
import { CardGroup, Col } from "react-bootstrap";
import "../App.css";
import "./EventsList.css";

const EventsList = ({ tours }) => {
  const toursList = tours.map((tour, index) => {
    return (
      <Col className="col" key={index}>
        <EventCard tour={tour} />
      </Col>
    );
  });

  return <CardGroup className="card-group">{toursList}</CardGroup>;
};

export default EventsList;
