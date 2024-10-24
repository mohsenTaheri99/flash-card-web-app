import axios, { AxiosInstance, AxiosResponse } from "axios";

const token = process.env.BOT_TOKEN;
const BASE_URL = `https://api.telegram.org/bot${token}`;

type AxiosWrapper = {
  get: (method: string, params?: Record<string, any>) => Promise<any>;
  post: (method: string, data?: Record<string, any>) => Promise<any>;
};

function createAxiosInstance(): AxiosWrapper {
  const instance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000, // 5 seconds timeout
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
      return instance.get(method, { params });
    },

    async post(method: string, data?: Record<string, any>): Promise<any> {
      return instance.post(method, data);
    },
  };
}

const axiosInstance: AxiosWrapper = createAxiosInstance();

export default axiosInstance;
