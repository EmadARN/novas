import axios from "axios";
import { API_CORE_URL } from "./api";

const createAxiosInstance = (baseURL) => {
  const instance = axios.create({
    baseURL,
    withCredentials: true,
  });

  // Request
  instance.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
  );

  // Response
  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalConfig = error.config;

      if (error.response?.status === 401 && !originalConfig?._retry) {
        originalConfig._retry = true;

        try {
          await axios.post(`${API_CORE_URL}auth/refresh-token/`, {
            withCredentials: true,
          });

          return instance(originalConfig);
        } catch (err) {
          if (typeof window !== "undefined") {
            window.location.href = "/auth";
          }
          return Promise.reject(err);
        }
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

export default createAxiosInstance;
