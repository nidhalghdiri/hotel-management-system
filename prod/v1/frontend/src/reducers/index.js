import { combineReducers } from "redux";
// import { userReducer } from "./userReducer";
import auth from "./authReducer";
import message from "./messageReducer";
import users from "./userReducer";

const rootReducer = combineReducers({
  auth,
  message,
  users,
});
export default rootReducer;
