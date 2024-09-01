import axios from "axios";
import { getSessionToken } from "./jwt-token";

const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const token = await getSessionToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/signin";
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
