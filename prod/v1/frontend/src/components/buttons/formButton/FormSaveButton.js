import React from "react";
import "./style.css";
function FormSaveButton({ value, type, hide }) {
  return (
    <button className="form_button" type={type}>
      {value}
    </button>
  );
}

export default FormSaveButton;
