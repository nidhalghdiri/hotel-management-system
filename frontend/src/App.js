import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import { connect } from "react-redux";
import Users from "./pages/users";
function App(props) {
  const { isLoggedIn, user } = props;
  return (
    <div>
      <Routes className="container mt-3">
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/profile" element={<Profile />} exact />
        <Route path="/users" element={<Users />} exact />
      </Routes>
    </div>
  );
}

function mapStateToProps(state) {
  const { isLoggedIn, user } = state.auth;
  return {
    isLoggedIn,
    user,
  };
}
export default connect(mapStateToProps)(App);
