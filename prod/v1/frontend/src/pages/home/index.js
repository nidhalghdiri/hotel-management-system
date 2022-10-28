import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../../services/user.service";

function Home(props) {
  const [content, setContent] = useState("");
  useEffect(() => {
    getPublicContent();
  }, []);
  const getPublicContent = () => {
    try {
      UserService.getPublicContent().then(
        (res) => {
          setContent(res.data);
        },
        (error) => {
          setContent(
            (error.response && error.response.data) ||
              error.message ||
              error.toString()
          );
        }
      );
    } catch (error) {
      console.log("Error in fetchting public content");
    }
  };
  return (
    <div>
      <h1>الصفحة الرئيسية</h1>
      <h1>مرحبا بكم</h1>
      <Link to={"/about"}>من نحن</Link>
      <Link to={"/login"}>تسجيل الدخول</Link>
      <div>{content}</div>
    </div>
  );
}

export default Home;
