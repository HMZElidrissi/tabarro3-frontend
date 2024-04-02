import axios from "axios";
import { getSession } from "next-auth/react";

const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    "Content-Type": "application/json"
  }
});

axiosClient.interceptors.request.use(async (config) => {
  const session = await getSession();
  config.headers.Authorization = `Bearer ${session?.accessToken}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log("Unauthenticated");
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
