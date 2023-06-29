import './NavBar.css'
import {NavLink} from 'react-router-dom'
import Logo from '../img/logo.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" className='NavBar'>
      <Container>
          <img src={Logo} alt="logo" />
          <span className='title_nav'>Duck's Car</span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{textAlign:"center",fontSize:"13px" ,width:"50px",height:"40px"}}/>
        <Navbar.Collapse id="basic-navbar-nav" style={{width:"70px",height:"50px"}} >
          <Nav className="me-auto">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/cars'>Estoque</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;