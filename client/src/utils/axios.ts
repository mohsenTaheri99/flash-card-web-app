import axios, { AxiosInstance, AxiosResponse } from "axios";

const BASE_URL = `http://localhost:3000`;

type AxiosWrapper = {
  get: (method: string, params?: Record<string, any>) => Promise<any>;
  post: (method: string, data?: Record<string, any>) => Promise<any>;
};

function createAxiosInstance(): AxiosWrapper {
  const instance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 3000,
  });

  // Response interceptor for error handling
  instance.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error: any) => {
      console.error("API request failed:", error.message);
      throw error;
    }
  );

  return {
    async get(method: string, params?: Record<string, any>): Promise<any> {
      return instance.get(method, {
        params,
        headers: {
          "x-telegram-init-data": window.Telegram.WebApp.initData,
        },
      });
    },

    async post(method: string, data?: Record<string, any>): Promise<any> {
      return instance.post(method, data, {
        headers: {
          "x-telegram-init-data": window.Telegram.WebApp.initData,
        },
      });
    },
  };
}

const axiosInstance: AxiosWrapper = createAxiosInstance();

export default axiosInstance;
