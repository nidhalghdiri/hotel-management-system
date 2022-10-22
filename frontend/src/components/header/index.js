import React from "react";
import "./style.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faUserCircle,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
function Header({ fullname, logout, ...props }) {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to={"/"} className="navbar_company_name">
            <FontAwesomeIcon icon={faBed} size="lg" />
            <span>إسم الشركة</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link navbar_links" to={"/profile"}>
              <FontAwesomeIcon icon={faUserCircle} size="lg" />
              <span>{fullname}</span>
            </Link>
            <Link className="nav-link navbar_links" to={"/profile"}>
              <FontAwesomeIcon icon={faGear} size="lg" />
              <NavDropdown title="الإعدادات" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Link>

            <Link
              className="nav-link navbar_links"
              to={"/login"}
              onClick={() => logout()}
            >
              <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
              <span>{" تسجيل الخروج"}</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
