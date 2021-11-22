/** @format */

import React from "react";
import "./Nav.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <div className="my-navbar">
      <Navbar className="my-nav-title" expand="lg">
        <Link to="/">
          <Navbar.Brand href="#">Ski Lovers</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/">
              <Nav.Link href="#action1">Home</Nav.Link>
            </Link>

            <Link to="/blog">
              <Nav.Link href="#action2">Blog</Nav.Link>
            </Link>
            <Link to="/cart">
              <Nav.Link href="#action2">My Cart</Nav.Link>
            </Link>
          </Nav>
          <Form className="d-flex my-form">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button id="nav-button" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MyNav;
