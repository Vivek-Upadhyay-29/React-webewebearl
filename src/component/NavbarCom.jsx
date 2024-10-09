import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faList,
  faSearch,
  faShoppingCart,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const NavbarCom = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="src/photos/Logo.png"
            alt="Your Company Logo"
            width="80"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown
              title={<FontAwesomeIcon icon={faList} />}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#">Service</NavDropdown.Item>
              <NavDropdown.Item href="#">Service Item 2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Offer</Nav.Link>
            <Button variant="outline-secondary">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Nav>
          <Nav>
            <Button variant="outline-secondary">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Button>
          </Nav>
          <Nav>
            <Button
              className="rounded-button"
              onClick={() => console.log("Button clicked")}
            >
              <FontAwesomeIcon icon={faPhone} style={{ paddingRight: "5px" }} />
              Contact
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCom;
