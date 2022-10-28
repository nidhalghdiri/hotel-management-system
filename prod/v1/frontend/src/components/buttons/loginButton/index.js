import React from "react";
import "./style.css";
function LoginButton({ value, type }) {
  return (
    <button className="login_button" type={type}>
      {value}
    </button>
  );
}

export default LoginButton;
