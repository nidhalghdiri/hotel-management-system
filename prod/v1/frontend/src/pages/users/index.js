import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Layout from "../../hoc/layout";
import ModalContainer from "../../components/modal/index";

function Users(props) {
  const [show, setShow] = useState(false);

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

export default Users;
