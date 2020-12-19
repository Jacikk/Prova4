import axios from "axios";
import { getToken } from './auth'

const Api = axios.create({
  baseURL: "https://localhost:44339/api/",
});

Api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default Api ;