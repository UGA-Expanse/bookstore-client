import axios from "axios";

const baseURL = "http://j5.rocks:8080/api/";

const axiosClient = axios.create({
  baseURL: baseURL
});

export default axiosClient;