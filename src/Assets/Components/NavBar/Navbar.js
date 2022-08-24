import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="dark">
      <Container>
        <Navbar.Brand>
          {" "}
          <Link to="/">Covid-19</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/About">About</Link>{" "}
            </Nav.Link>

            <Nav.Link>
              {" "}
              <Link to="/Precaution">Precaution</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              {" "}
              <Link to="/News">Latest News</Link>
            </Nav.Link>

            <Nav.Link>
              {" "}
              <Link to="/Contact">Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
