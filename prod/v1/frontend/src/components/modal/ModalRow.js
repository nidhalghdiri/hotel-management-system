import React from "react";
import "./style.css";
function ModalRow(props) {
  return (
    <div className="modal_row-container">
      <div className="modal_row-title">
        <b>{props.title}</b>
      </div>
      <div className="modal_row-body">{props.children}</div>
    </div>
  );
}

export default ModalRow;
