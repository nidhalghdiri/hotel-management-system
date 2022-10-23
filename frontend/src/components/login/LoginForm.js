import React, { useState } from "react";
import "./style.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import LoginInput from "../inputs/loginInput";
// import axios from "axios";
import LoginButton from "../buttons/loginButton";
import { Navigate, redirect } from "react-router-dom";
import AuthService from "../../services/auth.service";
import { withRouter } from "../../hoc/with-router";
import { connect } from "react-redux";
import { login as loginFunc } from "../../actions/auth";
import { clearMessage } from "../../actions/message";
const loginInfos = {
  email: "",
  password: "",
};

function LoginForm(props) {
  const [login, setLogin] = useState(loginInfos);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const { email, password } = login;

  const handlerLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const loginValidation = Yup.object({
    email: Yup.string()
      .required("البريد الإلكتروني إجباري.")
      .email("البريد الإلكتروني غير صحيح.")
      .max(50),
    password: Yup.string().required("كلمة المرور إجبارية."),
  });

  const { isLoggedIn, message } = props;

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  const loginSubmit = async () => {
    const { dispatch } = props;
    try {
      setError("");
      dispatch(clearMessage());
      setSuccess("");
      setLoading(true);
      dispatch(loginFunc(email, password))
        .then(() => {
          props.router.navigate("/profile");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <div>
        <Formik
          enableReinitialize
          initialValues={login}
          validationSchema={loginValidation}
          onSubmit={loginSubmit}
        >
          {(formik) => (
            <Form className="login_form">
              <LoginInput
                type="email"
                name="email"
                placeholder="أدخل البريد الإلكتروني الخاص بك"
                label="البريد الإلكتروني"
                onChange={handlerLoginChange}
              />
              <LoginInput
                type="password"
                name="password"
                placeholder="أدخل كلمة المرور الخاصة بك"
                label="كلمة المرور"
                onChange={handlerLoginChange}
              />
              <LoginButton type="submit" value="دخول" />
            </Form>
          )}
        </Formik>
        <div>
          {message && (
            <p className="login_form_status_message login_form_error">
              {message}
            </p>
          )}
          {success && (
            <div>
              <p className="login_form_status_message login_form_success">
                {success}
              </p>
              <Navigate replace to="/profile" />
            </div>
          )}
          {loading && (
            <p className="login_form_status_message login_form_loading">
              {"جاري البحث ..."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message,
  };
}

export default connect(mapStateToProps)(withRouter(LoginForm));
