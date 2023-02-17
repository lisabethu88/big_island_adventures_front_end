import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import SecNav from "../components/SecNav";
import { Card, Button, Table } from "react-bootstrap";
const kBaseUrl = process.env.REACT_APP_BACKEND_URL;
const page = "confirm";

const Dashboard = () => {
  return (
    <main>
      <section>
        <SecNav page={page} />
      </section>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <Link to="/">
        <Button variant="secondary" className="go-back-btn">
          Go Back
        </Button>
      </Link>
    </main>
  );
};

export default Dashboard;
