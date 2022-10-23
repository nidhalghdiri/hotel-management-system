import { combineReducers } from "redux";
// import { userReducer } from "./userReducer";
import auth from "./authReducer";
import message from "./messageReducer";

const rootReducer = combineReducers({
  auth,
  message,
});
export default rootReducer;
