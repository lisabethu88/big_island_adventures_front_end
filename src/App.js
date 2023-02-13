import React from "react";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col, Button, Alert, Breadcrumb, BreadcrumbItem, Card, Form, FormGroup } from 'react-bootstrap'
import TopNavBar from "./components/TopNavbar";
import {BrowserRouter } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <TopNavBar/>  
    <AdminRoutes/>

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
  
