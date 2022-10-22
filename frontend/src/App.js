import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import BoardUser from "./pages/dashboard/BoardUser";
import BoardModerator from "./pages/dashboard/BoardModerator";
import BoardAdmin from "./pages/dashboard/BoardAdmin";
import Layout from "./hoc/layout";
function App() {

  return (
    <Layout>
      <div>
        <Routes className="container mt-3">
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/user" element={<BoardUser />} exact />
          <Route path="/mod" element={<BoardModerator />} exact />
          <Route path="/admin" element={<BoardAdmin />} exact />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
