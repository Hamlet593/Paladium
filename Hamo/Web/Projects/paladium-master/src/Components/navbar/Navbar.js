import React, { useState } from "react";
import { Container, Navbar, NavbarBrand, Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "./Pics/PaladiumLogo2.png";
import "./Navbar.css";


export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const change = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", change);
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      className={navbar ? "navbar active" : "navbar"}
      variant="secondary"
    >
      <Container className="cont">
        <NavbarBrand href="/">
          <img
            src={logo}
            height={80}
            width={110}
            className="d-inline-block align-top"
            alt="Logo"
          ></img>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavItem>
              <NavLink className="nav-link" to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to="/about">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to="/work">Our Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to="/service">Our Service</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to="/products">Our Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to="/contact">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
