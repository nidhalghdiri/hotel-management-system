import React, { useEffect, useState } from "react";
import UserService from "../../services/user.service";

function BoardUser(props) {
  const [content, setContent] = useState("");
  useEffect(() => {
    getUserContent();
  }, []);
  const getUserContent = () => {
    try {
      UserService.getUserBoard().then(
        (res) => {
          setContent(res.data);
        },
        (error) => {
          console.log(error.response.data);
          setContent(error.response.data.message);
        }
      );
    } catch (error) {
      console.log("Error in fetchting user content");
    }
  };
  return (
    <div>
      <div>{content}</div>
    </div>
  );
}

export default BoardUser;
