/** @format */

import React from "react";
import "./Nav.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNav = (props) => {
  const { countCartItems } = props;

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
              <Nav.Link href="#action3">
                Cart
                {countCartItems ? (
                  <button className="badge">{countCartItems}</button>
                ) : (
                  " "
                )}
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MyNav;
