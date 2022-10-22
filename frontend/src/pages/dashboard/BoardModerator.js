import React, { useEffect, useState } from "react";
import UserService from "../../services/user.service";

function BoardModerator(props) {
  const [content, setContent] = useState("");
  useEffect(() => {
    getModeratorContent();
  }, []);
  const getModeratorContent = () => {
    try {
      UserService.getModeratorBoard().then(
        (res) => {
          setContent(res.data);
        },
        (error) => {
          console.log(error.response.data);
          setContent(error.response.data.message);
        }
      );
    } catch (error) {
      console.log("Error in fetchting Moderator content");
    }
  };
  return (
    <div>
      <div>{content}</div>
    </div>
  );
}

export default BoardModerator;
