import axios from "axios";

const instance = axios.create({
  baseURL: "https://dating-mern-app25.herokuapp.com/",
});

export default instance;
