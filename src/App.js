import React from "react";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Alert, Breadcrumb, BreadcrumbItem, Card, Form, FormGroup } from 'react-bootstrap'
import ColorSchemesExample from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import EventsPage from './pages/EventsPage'
import NoPage from './pages/NoPage'
import Client from './pages/Client'
import ConfirmBooking from "./pages/ConfirmBooking"
import BookingButton from "./components/BookingButton"
import Login from "./components/Login"
import Signup from "./components/Signup"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <ColorSchemesExample/>
    <BookingButton/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/client" element={<Client />} />
        <Route path="/confirm" element={<ConfirmBooking />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/events" element={<BookingButton />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>

    </BrowserRouter>
  </>
  )
}

export default App;




/*           <TopNav></TopNav> <Container fluid>
          <Form>
            <Row>
            <Col>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="lisabethu88@gmail.com" />
              <Form.Text className="text-muted">Do not share email address</Form.Text>
            </Form.Group>
            </Col>

            <Col>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            </Col>
          </Row>
            <Button className="mb-2" type="submit" variant="secondary">Login</Button>
          </Form>

          <Card className="mb-3">
            <Card.Img src="https://picsum.photos/200/100"/>
            <Card.Body>
              <Card.Title>Card Example</Card.Title>
              <Card.Text>This is an example of react bootstrap cards</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>

          <Breadcrumb>
          <BreadcrumbItem>Test</BreadcrumbItem>
          <BreadcrumbItem>Test</BreadcrumbItem>
          <BreadcrumbItem active>Test</BreadcrumbItem>
          </Breadcrumb>

        <Alert variant="primary">This is a button</Alert>
        <Button>Test Button</Button>
      </Container> 
      </header>
      {/* <Router>
        <TopNav />
      </Router> 
    </div>*/
  
