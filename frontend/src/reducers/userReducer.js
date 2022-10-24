import { USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from "../actions/types";

const initialState = { users: [] };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        users: [...state.users, payload.user],
      };
    case USER_REGISTER_FAIL:
      return {
        ...state,
        users: state.users,
      };
    default:
      return state;
  }
}
