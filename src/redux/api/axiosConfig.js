import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.authorization = `${localStorage.token}`;
  return config;
});

axiosInstance.interceptors.response.use((config) => {
  config.headers.authorization = `${localStorage.token}`;
  return config;
});
