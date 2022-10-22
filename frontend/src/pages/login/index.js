import React, { useEffect, useState } from "react";
import "./style.css";
import LoginForm from "../../components/login/LoginForm";
import AuthService from "../../services/auth.service";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    CheckUserExist();
  }, []);

  const CheckUserExist = () => {
    const currUser = AuthService.getCurrentUser();
    if (currUser) {
      setRedirect("/");
    }
  };
  return (
    <div>
      {redirect ? <Navigate to={redirect} /> : null}
      <div className="login_container">
        <h1>تسجيل الدخول</h1>
        <LoginForm />
      </div>
    </div>
  );
}
