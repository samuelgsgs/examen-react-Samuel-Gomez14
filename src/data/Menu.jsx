import React from 'react';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

import { PaginasApp } from '../data/PaginasApp';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar bg="light" variant="light" expand={false}>
          <Container fluid>
            <Navbar.Brand href="#">NavBar Examen Samuel</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav>
                  {PaginasApp.map((item) => {
                    return (
                      <Nav.Link key={uuid()} as={Link} to={item.path}>
                        {item.title}
                      </Nav.Link>
                    );
                  })}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <h1>Desarrollo de Interfaces: Examen React.js</h1>
        <p>
          Resuelve los ejercicios propuestos. Para ello, haz un fork de este
          repositorio desde tu cuenta de Github y sube un enlace a la tarea de
          examen. El repositorio debe tener el nombre
          examen-react-Nombre-Apellido1, donde nombre y apellido son los tuyos.
        </p>
      </div>
    );
  }
}
export default Menu;
