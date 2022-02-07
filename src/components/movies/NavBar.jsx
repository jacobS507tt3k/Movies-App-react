import React from "react";
import {
  Nav,
  Container,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export const NavBar = () => {

    const logoApp = "../assets/logoApp.png";
    const logOut = "../assets/logout.png";
  return (
    <div>
      <Navbar className="navigation_bar fw-bold" bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#"><img
                alt=""
                src={logoApp}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}Calidad Cinema</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Destacadas</Nav.Link>
              <Nav.Link href="#action2">Estrenos</Nav.Link>
              <NavDropdown title="Generos" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Acción</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Ficción
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Zombies
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex mx-auto">
              <FormControl
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Navbar.Collapse>
          <Navbar.Brand href="#"><img
                alt=""
                src={logOut}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}Salir</Navbar.Brand>
        </Container>
      </Navbar>

      
    </div>
  );
};
