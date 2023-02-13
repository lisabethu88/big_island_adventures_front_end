import React from "react";
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav} from "react-bootstrap";

const BottomNavBar = () => {
    return (
        <>  
        <Navbar bg="light" variant="light">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='events'>Events</Nav.Link>
                    <Nav.Link as={Link} to='events/'>Event Info</Nav.Link>
                    <Nav.Link as={Link} to='client'>Client</Nav.Link>
                    <Nav.Link as={Link} to='confirm'>Confirm</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
}

export default BottomNavBar;