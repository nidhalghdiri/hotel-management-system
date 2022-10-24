import { ErrorMessage, useField } from "formik";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.css";
function ModalField({ label, placeholder, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="modal_field">
      <Row>
        <Col xl={4} lg={4} md={6} sm={12}>
          <div className="modal_field-title">
            <span>{label}</span>
          </div>
        </Col>
        <Col xl={8} lg={8} md={6} sm={12}>
          <div className="modal_field-input">
            <input
              type={field.type}
              name={field.name}
              placeholder={placeholder}
              className={meta.touched && meta.error ? "input_invalid" : ""}
              {...field}
              {...props}
            />
          </div>
          {meta.touched && meta.error && (
            <div className="login_input_error">
              <ErrorMessage name={field.name} className="login_error_msg" />
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default ModalField;
