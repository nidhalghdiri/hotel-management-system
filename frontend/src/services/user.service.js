import axios from "axios";
import authHeader from "./auth-header";

const API_URL = `${process.env.REACT_APP_BACKEND_URL}/`;

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "api/test/all");
  }
  getUserBoard() {
    return axios.get(API_URL + "api/test/user", { headers: authHeader() });
  }
  getModeratorBoard() {
    return axios.get(API_URL + "api/test/mod", { headers: authHeader() });
  }
  getAdminBoard() {
    return axios.get(API_URL + "api/test/admin", { headers: authHeader() });
  }
  register(user) {
    return axios.post(API_URL + "register", {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      gender: user.gender,
      password: user.password,
    });
  }
}

export default new UserService();
