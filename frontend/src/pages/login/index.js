import React from "react";
import "./style.css";
import LoginForm from "../../components/login/LoginForm";

export default function Login() {
  return (
    <div>
      <div className="login_container">
        <h1>تسجيل الدخول</h1>
        <LoginForm />
      </div>
    </div>
  );
}
