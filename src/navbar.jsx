// AppNavbar.js
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function AppNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            <NavLink to="/fb_post" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>FB Post</NavLink>
            <NavLink to="/props" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Movies</NavLink>
            <NavLink to="/product" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Product</NavLink>
           
            <NavLink to="/book_hook" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Add Hook</NavLink>
            <NavLink to="/date_time" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Date Time</NavLink>
            <NavLink to="/effects_pro" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Counter</NavLink>
            <NavLink to="/events" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Color</NavLink>
            <NavLink to="/header" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Header</NavLink>
            <NavLink to="/inputs" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Salary</NavLink>
            <NavLink to="/pro_detail" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Product Detail</NavLink>
            <NavLink to="/material_ui" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Material_ui</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
