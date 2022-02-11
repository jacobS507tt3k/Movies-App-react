import React, { useLayoutEffect, useState } from "react";
import {
  Nav,
  Container,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { MDBIcon } from 'mdb-react-ui-kit';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import { buscarMovie, searchMovie } from "../../actions/uiCards";
import { useForm } from "../hooks/useForm";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formSearch, handleInputChange] = useForm({
    buscar: "",
  });
  const { buscar,  } = formSearch;

  const { name } = useSelector((state) => state.auth);
  const logoApp = "../assets/logoApp.png";
  const logOut = "../assets/logout.png";

  const handleLoginout = () => {
    dispatch(startLogout());
  };

  const handleInputSearch = (e) => {
    console.log(buscar);
    e.preventDefault();
    navigate(`buscar`);
    dispatch(buscarMovie(buscar));
  };

  return (
    <div>
      <Navbar fixed="top" bg="light" expand="lg" className="fluid">
        <Container>
          <Navbar.Brand>
            {" "}
            <img
              alt=""
              src={logoApp}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <Link className="navbar-brand" to="/">
              Calidad Cinema
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive ? "active" : "")
                }
                to="/destacados"
              >
                <MDBIcon fas icon="star" /> Destacados
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive ? "active" : "")
                }
                to="/estrenos"
              >
                
                <MDBIcon fas icon="newspaper" /> Estrenos
              </NavLink>
              <NavDropdown title="Generos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action3">Acción</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Ficción</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Zombies</NavDropdown.Item>
              </NavDropdown>

              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive ? "active" : "")
                }
                to="/mapa"
              >
                <MDBIcon fas icon="map-marked-alt" /> Mapa de cines
              </NavLink>
            </Nav>
            <Form onSubmit={handleInputSearch} className="d-flex mx-auto">
              <FormControl
                as="input"
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
                name="buscar"
                value={buscar}
                onChange={handleInputChange}
              />
              <Button type="submit" variant="outline-success">
                Buscar
              </Button>
            </Form>
            <Navbar.Brand>
              <Nav>
              <Navbar.Text>
              <MDBIcon fas icon="user-circle" />
                Usuario: <span> {name}</span>
              </Navbar.Text>
              </Nav>
              <Nav.Link href="#features">
                <Button onClick={handleLoginout}>Salir</Button>
              </Nav.Link>
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
