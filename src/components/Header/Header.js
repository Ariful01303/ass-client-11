import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import useAuth from '../Hooks/useAuth';




const Header = () => {
//  const {user,logOut}= useAuth()
    return (
        <div>
             <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">Tour BD</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">

      <Nav.Link as ={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as ={HashLink} to="/home#service">Service</Nav.Link>
      <Nav.Link as ={Link} to="/dantists">Our Dentists</Nav.Link>
      <Nav.Link as ={Link} to="/about">About Us</Nav.Link>

     <Button>LogOut</Button>
      <Nav.Link as ={Link} to="/login">login</Nav.Link>

     
     <Navbar.Text className="d-flex ms-5"><p className="col-title">Please Login</p></Navbar.Text>
    </Navbar.Collapse>
   
    </Container>
    </Navbar>
        </div>
    );
};

export default Header;