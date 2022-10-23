import React from "react";
import "../App.css";
import { Col, Row } from "react-bootstrap";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { Navigate } from "react-router-dom";

import { connect } from "react-redux";
import { logout as logoutFunc } from "../actions/auth";

function Layout(props) {
  const { isLoggedIn, user } = props;

  const logout = () => {
    props.dispatch(logoutFunc());
  };
  return (
    <main className="layout">
      {!isLoggedIn ? <Navigate to={"/login"} /> : null}
      {user ? (
        <Row>
          <Col xs={2} md={2} lg={2} xl={2} className="px-0">
            <Sidebar />
          </Col>
          <Col xs={10} md={10} lg={10} xl={10} className="px-0">
            <Header
              fullname={`${user.first_name} ${user.last_name}`}
              logout={logout}
            />
            <div className="main">
              <div className="main_content">{props.children}</div>
            </div>
          </Col>
        </Row>
      ) : null}
    </main>
  );
}
function mapStateToProps(state) {
  const { isLoggedIn, user } = state.auth;
  return {
    isLoggedIn,
    user,
  };
}

export default connect(mapStateToProps)(Layout);
