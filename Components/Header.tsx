import React from "react";
import { Container, Navbar, Form, Button } from "react-bootstrap";
import useUserStore from "../State/store";
import { Link } from "react-router-dom";

const Header = () => {
  const setSearchResults = useUserStore(
    (state) => state.setSearchResults
  );

  return (
    <Navbar className="custom-navbar shadow-sm">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand className="brand-text">
          Student Manangement System
        </Navbar.Brand>
        <Link to='/'>Home</Link>
        <Link to='/add-student'>Add Students</Link>
        <Link to='/login'>Login</Link>
        <Form className="search-box d-flex">
          <input
            type="text"
            placeholder="Search students..."
            className="search-input"
            onChange={(e) => setSearchResults(e.target.value)}
          />
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;