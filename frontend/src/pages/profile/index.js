import React, { useState } from "react";
import { connect } from "react-redux";
import Layout from "../../hoc/layout";
function Profile(props) {
  const { user } = props;

  return (
    <>
      <Layout>
        {user ? (
          <div>
            <b>مرحبا </b>{" "}
            <span>
              {props.user.first_name} {props.user.last_name}
            </span>{" "}
            <br />
            <b>إسم المستخدم : </b>
            {props.user.username}
            <br />
            <b>البريد الإلكتروني : </b>
            {props.user.email}
            <br />
            <b>الوظيفة :</b>
            <ul>
              {props.user.roles &&
                props.user.roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
            </ul>
          </div>
        ) : null}
      </Layout>
    </>
  );
}
function mapStateToProps(state) {
  const { isLoggedIn, user } = state.auth;
  return {
    isLoggedIn,
    user,
  };
}
export default connect(mapStateToProps)(Profile);
