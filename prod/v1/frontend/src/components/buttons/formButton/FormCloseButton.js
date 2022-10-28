import React from "react";
import "./style.css";
function FormCloseButton({ value, type, hide }) {
  return (
    <button className="form_button" type={type} onClick={() => hide(false)}>
      {value}
    </button>
  );
}

export default FormCloseButton;
