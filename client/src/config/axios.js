import axios from "axios";

const baseURL = "http://j5.rocks:8080/api/";

const axiosClient = axios.create({
  baseURL: baseURL
});




axiosClient.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  if (error.status === 401 || error.status === 403) {
    localStorage.clear();
  }
  return Promise.reject(error);
});

export default axiosClient;