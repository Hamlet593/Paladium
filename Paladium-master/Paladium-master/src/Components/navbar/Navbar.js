import React, { useState } from "react";
import { Container, Navbar, NavbarBrand, Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "./Pics/logo1.png";
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
            height={70}
            width={100}
            className="d-inline-block align-top"
            alt="Logo"
          ></img>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavItem>
              <NavLink className="active" to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/work">Our Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/service">Our Service</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/products">Our Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
