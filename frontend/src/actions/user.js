import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  SET_MESSAGE,
} from "./types";

import UserService from "../services/user.service";

export const register =
  (first_name, last_name, email, gender, password) => (dispatch) => {
    console.log("Register Function Running...");
    return UserService.register(
      first_name,
      last_name,
      email,
      gender,
      password
    ).then(
      (res) => {
        const message = res.data.message;
        dispatch({
          type: USER_REGISTER_SUCCESS,
          payload: { user: res.data },
        });
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.resolve();
      },
      (error) => {
        const message = error.response.data.message;
        dispatch({
          type: USER_REGISTER_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      }
    );
  };
