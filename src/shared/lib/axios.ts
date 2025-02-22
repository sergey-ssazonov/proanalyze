import axios from "axios";
import Cookies from "js-cookie";
import { env } from "next-runtime-env";

const axiosInstance = axios.create({
  baseURL: env("NEXT_PUBLIC_API_URL"),
  headers: {
    "Content-Type": "application/json",
  },
});

const token = Cookies.get("token");

const axiosInstanceAuth = axios.create({
  baseURL: env("NEXT_PUBLIC_API_URL"),
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

axiosInstanceAuth.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
export { axiosInstanceAuth };
