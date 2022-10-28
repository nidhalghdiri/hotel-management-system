import { ErrorMessage, useField } from "formik";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./style.css";
function ModalSelect({ label, placeholder, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="modal_field">
      <Row>
        <Col xl={5} lg={4} md={6} sm={12}>
          <div className="modal_field-title">
            <span>{label}</span>
          </div>
        </Col>
        <Col xl={7} lg={8} md={6} sm={12}>
          <div className="modal_field-input">
            <Form.Select
              name={field.name}
              className={meta.touched && meta.error ? "input_invalid" : ""}
              aria-label="Default select example"
              {...field}
              {...props}
            >
              <option value="male">{"ذكر"}</option>
              <option value="female">{"أنثي"}</option>
            </Form.Select>
          </div>
          {meta.touched && meta.error && (
            <div className="modal_field_input_error">
              <ErrorMessage
                name={field.name}
                className="modal_field_error_msg"
              />
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default ModalSelect;
