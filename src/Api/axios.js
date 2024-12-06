import axios from "axios";

const instance = axios.create({
  baseURL: "https://evangadiforum-backend-aaa-1.onrender.com/api/",
});

export default instance;
