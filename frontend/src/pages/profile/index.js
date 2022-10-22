import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
// import axios from "axios";
import AuthService from "../../services/auth.service";
function Profile() {
  const [redirect, setRedirect] = useState(null);
  const [userReady, setUserReady] = useState(false);
  const [currentUser, setCurrentUser] = useState({ email: "" });
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    const currUser = AuthService.getCurrentUser();
    if (!currUser) {
      setRedirect("/login");
    } else {
      setCurrentUser(currUser);
      setUserReady(true);
      console.log("Current user", currUser);
    }
  };
  return (
    <div>
      {redirect ? <Navigate to={redirect} /> : null}
      {userReady ? (
        <div>
          <b>Welcome</b>{" "}
          <span>
            {currentUser.first_name} {currentUser.last_name}
          </span>{" "}
          <br />
          <b>Username : </b>
          {currentUser.username}
          <br />
          <b>Email : </b>
          {currentUser.email}
          <br />
          <b>Roles</b>
          <ul>
            {currentUser.roles &&
              currentUser.roles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Profile;
