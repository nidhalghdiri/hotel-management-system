import React from "react";
import "./style.css";
import { ErrorMessage, useField } from "formik";

function LoginInput({ label, placeholder, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="login_input">
      <div className="login_input_main">
        <label>{label}</label>
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
    </div>
  );
}

export default LoginInput;
