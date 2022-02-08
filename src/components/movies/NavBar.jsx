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
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {

    const logoApp = "../assets/logoApp.png";
    const logOut = "../assets/logout.png";

    const handleLoginout = () => {
      
    }
  return (
    <div>
      <Navbar className="navigation_bar fw-bold" bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand ><img
                alt=""
                src={logoApp}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}<Link 
              className="navbar-brand" 
              to="/"
          >
              Calidad Cinema
          </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/destacados"
                    >
                        Destacados
                    </NavLink>
              <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/estrenos"
                    >
                        Estrenos
                    </NavLink>
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
              />{" "}
              <Button
                onClick={handleLoginout}
              >
              Salir
              </Button>
              
              </Navbar.Brand>
        </Container>
      </Navbar>

      
    </div>
  );
};
