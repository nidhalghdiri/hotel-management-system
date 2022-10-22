import React, { useEffect, useState } from "react";
import UserService from "../../services/user.service";

function BoardAdmin(props) {
  const [content, setContent] = useState("");
  useEffect(() => {
    getAdminContent();
  }, []);
  const getAdminContent = () => {
    try {
      UserService.getAdminBoard().then(
        (res) => {
          setContent(res.data);
        },
        (error) => {
          console.log(error.response.data);
          setContent(error.response.data.message);
        }
      );
    } catch (error) {
      console.log("Error in fetchting Admin content");
    }
  };
  return (
    <div>
      <div>{content}</div>
    </div>
  );
}

export default BoardAdmin;
