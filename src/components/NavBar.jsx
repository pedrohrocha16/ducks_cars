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
          <span>Duck's Car</span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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