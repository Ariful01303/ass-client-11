import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../Firebase/useAuth';
import './Header.css'

const Header = () => {
 const {user,logOut}= useAuth()
    return (
        <div>
             <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">Tour BD</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">

      <Nav.Link as ={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as ={HashLink} to="/home#service">Service</Nav.Link>
      <Nav.Link as ={Link} to="/services">Services</Nav.Link>
      <Nav.Link as ={Link} to="/about">About Us</Nav.Link>
      {user?.email?
     <div className="d-flex">
          <Nav.Link as ={Link} to="/manageorder">Manage order</Nav.Link>
          <Nav.Link as ={Link} to="/books">My Orders</Nav.Link>
          <Nav.Link as ={Link} to="/addservice">Add Orders</Nav.Link>
          <Button onClick={logOut} variant="danger">LogOut</Button>
     </div>
      
      :
      <Nav.Link as ={Link} to="/login">login</Nav.Link>}

     { user?.email?<Navbar.Text className="d-flex ms-5"><p className="text-danger">{user?.displayName} </p> {user?.photoURL?<img className="header-photo" src={user?.photoURL} alt="" />:<p className="text-danger"> {user?.email}</p>}
      </Navbar.Text>
      :<p className="text-danger">Please Login</p>}
    </Navbar.Collapse>
   
    </Container>
    </Navbar>
        </div>
    );
};

export default Header;