import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav} from "react-bootstrap";
const TopNavBar = ()=> {
  return (
    <>  
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Big Island Adventures</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          </Navbar.Collapse>
          <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='about'>About</Nav.Link>
            <Nav.Link as={Link} to='events'>Tours</Nav.Link>
            <Nav.Link as={Link} to='login'>Login</Nav.Link>
            <Nav.Link as={Link} to='signup'>Sign Up</Nav.Link>
            <Navbar.Text>
              Signed in as: <a href="#login">Name</a>
            </Navbar.Text>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNavBar;

/* 
const TopNav = () => {
  return (
    <section>
      <Navbar className="Nav">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Name</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="booking-procress-bar">
        <ul className="booking-step">
          <li>EVENT</li>
          <li>EVENT INFO</li>
          <li>CLIENT</li>
          <li>CONFIRMATION</li>
        </ul>
      </div>
      </section>
  );
}

export default TopNav; */