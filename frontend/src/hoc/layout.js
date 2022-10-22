import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

import AuthService from "../services/auth.service";
function Layout(props) {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    getCurrUser();
  }, []);

  const getCurrUser = () => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  };
  const logout = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };
  return (
    <main className="layout">
      <Row>
        <Col xs={2} md={2} lg={2} xl={2} className="px-0">
          {currentUser ? <Sidebar /> : null}
        </Col>
        <Col xs={10} md={10} lg={10} xl={10} className="px-0">
          {currentUser ? (
            <Header
              fullname={`${currentUser.first_name} ${currentUser.last_name}`}
              logout={logout}
            />
          ) : null}
          {/* {currentUser ? (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Home
          </Link>
          <div className="navbar-nav mr-auto">
            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href={"/login"} className="nav-link" onClick={logout}>
                Logout
              </a>
            </li>
          </div>
        </nav>
      ) : null} */}
          {props.children}
        </Col>
      </Row>
    </main>
  );
}

export default Layout;
