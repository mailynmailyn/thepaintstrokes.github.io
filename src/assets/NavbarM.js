import classes from "./Navbar.module.scss"
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const NavbarM = () => {
    return <Navbar className = {classes.nav} bg="light" expand="lg">
    <Container>
      <a className = {classes.nav__logo} href="/">THE PAINT STROKES &#x1F58C;</a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as= {Link} to = "/aboutus">About Us</Nav.Link>
          <NavDropdown title="Workshops" id="basic-nav-dropdown">
            <NavDropdown.Item href="http://localhost:3000/workshopselect">Pottery</NavDropdown.Item>
            <NavDropdown.Item href="http://localhost:3000/workshopselect">Painting</NavDropdown.Item>
            <NavDropdown.Item href="http://localhost:3000/workshopselect">Photography</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="http://localhost:3000/workshopselect">Family Workshops</NavDropdown.Item>
            <NavDropdown.Item href="http://localhost:3000/workshopselect">Children Workshops</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="http://localhost:3000/artists">Meet Our Artists!</Nav.Link>
          <NavDropdown title="&#x1F30E;" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Français</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
};

export default NavbarM;