import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './logo.svg';
import AppRoutes from './routes';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img src={logo} alt="React Logo" width="30" height="30" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">Tugas PTI</Nav.Link>
        </Nav>
      </Navbar>
      <AppRoutes />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <ul>
              <li>
                <a href="/pti-1" className="text-light">
                  Task 1
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Task 2
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Task 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;