import React from "react";
import { Container, Navbar, Form, Button } from "react-bootstrap";
import useUserStore from "../State/store";
import { Link } from "react-router-dom";
import { SiLinuxprofessionalinstitute } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const setSearchResults = useUserStore(
    (state) => state.setSearchResults
  );

  const navigate=useNavigate();

  const logout=(e:any)=>{
    e.preventDefault();
    sessionStorage.removeItem('loginkey');
    localStorage.removeItem('userData');
    navigate('/');
  }

  const userLogin=sessionStorage.getItem('loginkey');
  return (
    <Navbar className="custom-navbar shadow-sm">
      <Container className={`d-flex align-items-center justify-content-between ${(userLogin)?'justify-content-between':'justify-content-start'}`}>
        <Navbar.Brand className="brand-text">
          Student Manangement System
        </Navbar.Brand>
        <Link to='/'>Home</Link>
        <Link to='/home' className={`${(userLogin)?'d-block':'d-none'}`}>Dashboard</Link>
        <Link to='/add-student' className={`${(userLogin)?'d-block':'d-none'}`}>Add Students</Link>
        <Link to='/login' className={`${(userLogin)?'d-none':'d-block'}`}>Login</Link>
        <Link to='/signup' className={`${(userLogin)?'d-none':'d-block'}`}>Signup</Link>
        <Form className={`search-box  ${(userLogin)?'d-flex':'d-none'}`}>
          <input
            type="text"
            placeholder="Search students..."
            className="search-input"
            onChange={(e) => setSearchResults(e.target.value)}
          />
        </Form>
        <Link to='/signup' onClick={logout} className={`${(userLogin)?'d-block':'d-none'}`}>Logout</Link>
      </Container>
    </Navbar>
  );
};

export default Header;