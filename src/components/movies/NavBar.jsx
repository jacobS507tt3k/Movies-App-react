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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import { buscarMovie, searchMovie } from "../../actions/uiCards";
import { useForm } from "../hooks/useForm";

export const NavBar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formSearch, handleInputChange] = useForm({
    buscar:"hulk"
  })
  const {buscar} = formSearch
  
  const {name} = useSelector(state => state.auth);
    const logoApp = "../assets/logoApp.png";
    const logOut = "../assets/logout.png";

    const handleLoginout = () => {
      dispatch(startLogout())
    }
    
  
    
    const handleInputSearch = (e) => {
      console.log(buscar)
      e.preventDefault();
      navigate(`buscar`)
        dispatch(buscarMovie(buscar));
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
              <Button type="submit" variant="outline-success" >
              Buscar
          </Button>
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



