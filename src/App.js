import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './logo.svg';
import AppRoutes from './routes';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img src={logo} alt="React Logo" width="30" height="30" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">Tugas PTI - Rizky H Saputra - 232053001</Nav.Link>
        </Nav>
      </Navbar>
      <div className="App-body">
        <div className="row justify-content-center">
          <div className="col-md-3 d-flex App-section align-items-center justify-content-center">
            <p>
              <a href="/pti-1" className="text-light">
                Task 1
              </a>
            </p>
            <br />
          </div>
          <div className="col-md-3 d-flex App-section align-items-center justify-content-center">
            <p>
              <a href="/pti-2" className="text-light">
                Task 2
              </a>
            </p>
            <br />
          </div>
          <div className="col-md-3 d-flex App-section align-items-center justify-content-center">
            <p>
              <a href="/pti-3" className="text-light">
                Task 3
              </a>
            </p>
            <br />
          </div>
        </div>
      </div>
      <br />
      <AppRoutes />
    </div>
  );
}

export default App;
