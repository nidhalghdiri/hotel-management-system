import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Layout from "../../hoc/layout";
import ModalContainer from "../../components/modal/index";
import ModalRow from "../../components/modal/ModalRow";
import ModalField from "../../components/modal/ModalField";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormSaveButton from "../../components/buttons/formButton/FormSaveButton";

function Users(props) {
  const [show, setShow] = useState(false);

  const { isLoggedIn, message } = props;

  const hideModalHandler = (show) => {
    setShow(show);
  };
  return (
    <Layout>
      <h1>المستخدمين</h1>
      <Button variant="dark" onClick={() => setShow(true)}>
        إضافة مستخدم
      </Button>
      {/* Modal Container */}
      <ModalContainer
        show={show}
        hide={hideModalHandler}
        title={"إضافة مستخدم"}
      />
    </Layout>
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

export default Users;
