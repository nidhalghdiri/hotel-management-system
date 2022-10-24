import React, { useState } from "react";
import "./style.css";
import { Button, Col, Modal, Row } from "react-bootstrap";
import FormSaveButton from "../buttons/formButton/FormSaveButton";
import FormCloseButton from "../buttons/formButton/FormCloseButton";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import ModalField from "./ModalField";
import ModalRow from "./ModalRow";
import { connect } from "react-redux";
import { clearMessage } from "../../actions/message";
import { register as registerFunc } from "../../actions/user";
import { useNavigate } from "react-router-dom";
const userInfos = {
  first_name: "",
  last_name: "",
  email: "",
  gender: "",
  password: "",
};
function ModalContainer(props) {
  const [newUser, setNewUser] = useState(userInfos);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const { first_name, last_name, email, gender, password } = newUser;
  const navigate = useNavigate();
  const { message } = props;

  const userValidation = Yup.object({
    first_name: Yup.string().required("الإسم الأول إجباري"),
    last_name: Yup.string().required("الإسم الأخير إجباري"),
    email: Yup.string()
      .required("البريد الإلكتروني إجباري.")
      .email("البريد الإلكتروني غير صحيح.")
      .max(50),
    gender: Yup.string().required("الجنس إجباري.").max(50),
    password: Yup.string().required("كلمة المرور إجبارية."),
  });

  const handlerUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const userSubmit = async () => {
    const { dispatch } = props;
    try {
      dispatch(clearMessage());
      setShowResult(true);
      setLoading(true);
      dispatch(registerFunc(first_name, last_name, email, gender, password))
        .then(() => {
          console.log("Register User successfully");
          setLoading(false);
        })
        .catch(() => {
          console.log("Register User Error");
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
    }
  };
  const handleClose = () => {
    setShowResult(false);
  };
  return (
    <div>
      <Modal
        // size="xl"
        fullscreen
        show={props.show}
        onHide={() => props.hide(false)}
        dialogClassName="modal-90w modal_container"
        contentClassName="modal_container-content"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Formik
          enableReinitialize
          initialValues={newUser}
          validationSchema={userValidation}
          onSubmit={userSubmit}
        >
          {(formik) => (
            <Form>
              <Modal.Header
                closeButton
                closeVariant="white"
                className="modal_container-header"
              >
                <Modal.Title id="example-custom-modal-styling-title">
                  {props.title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ModalRow title={"معلومات المستخدم"}>
                  <Row>
                    <Col xl={4} lg={4} md={6} sm={6}>
                      <ModalField
                        type="text"
                        name="first_name"
                        label={"الإسم الأول"}
                        onChange={handlerUserChange}
                      />
                    </Col>
                    <Col xl={4} lg={4} md={6} sm={6}>
                      <ModalField
                        type="text"
                        name="last_name"
                        label={"الإسم الأخير"}
                        onChange={handlerUserChange}
                      />
                    </Col>
                    <Col xl={4} lg={4} md={6} sm={6}>
                      <ModalField
                        type="email"
                        name="email"
                        label={"البريد الإلكتروني"}
                        onChange={handlerUserChange}
                      />
                    </Col>
                    <Col xl={4} lg={4} md={6} sm={6}>
                      <ModalField
                        type="text"
                        name="gender"
                        label={"الجنس"}
                        onChange={handlerUserChange}
                      />
                    </Col>
                    <Col xl={4} lg={4} md={6} sm={6}>
                      <ModalField
                        type="password"
                        name="password"
                        label={"كلمة المرور"}
                        onChange={handlerUserChange}
                      />
                    </Col>
                  </Row>
                </ModalRow>
              </Modal.Body>
              <Modal.Footer className="modal_container-footer">
                <Row className="w-100">
                  <Col xl={6} lg={6} md={6} sm={6}>
                    <div className="modal_container-footer-savebutton">
                      <FormSaveButton value={"حفظ"} type={"submit"} />
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6}>
                    <div className="modal_container-footer-closebutton">
                      <FormCloseButton
                        value={"خروج"}
                        type={"button"}
                        hide={props.hide}
                      />
                    </div>
                  </Col>
                </Row>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>

      <Modal show={showResult} onHide={handleClose} animation={false}>
        <Modal.Body>
          {message && <p className="model_result_message">{message}</p>}
          {loading && (
            <p className="model_result_message">{"جاري البحث ..."}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" disabled={loading} onClick={handleClose}>
            {"خروج"}
          </Button>
        </Modal.Footer>
      </Modal>
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
export default connect(mapStateToProps)(ModalContainer);
