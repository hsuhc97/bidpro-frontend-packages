// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// export interface ApiClientConfig {
//   baseURL: string;
//   onError?: (error: AxiosError) => void;
// }

// export class ApiClient {
//   private instance: AxiosInstance;

//   constructor(config: ApiClientConfig) {
//     this.instance = axios.create({
//       baseURL: config.baseURL,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     this.instance.interceptors.response.use(
//       (response) => response,
//       (error: AxiosError) => {
//         if (config.onError) {
//           config.onError(error);
//         }
//         return Promise.reject(error);
//       }
//     );
//   }

//   async request<T>(config: AxiosRequestConfig): Promise<T> {
//     try {
//       const response: AxiosResponse<T> = await this.instance.request(config);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   }

//   async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
//     return this.request<T>({ ...config, method: 'GET', url });
//   }

//   async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
//     return this.request<T>({ ...config, method: 'POST', url, data });
//   }

//   async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
//     return this.request<T>({ ...config, method: 'PUT', url, data });
//   }

//   async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
//     return this.request<T>({ ...config, method: 'PATCH', url, data });
//   }

//   async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
//     return this.request<T>({ ...config, method: 'DELETE', url });
//   }
// }

// export const api = new ApiClient({
//   baseURL: 'http://localhost:3000',
// });

import axios, { AxiosInstance } from 'axios';
import { ApiClientOptions } from './types';

const createApiClient = ({ baseURL, token, onError }: ApiClientOptions): AxiosInstance => {
  const client = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  client.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
  );

  client.interceptors.response.use(
    (response) => response.data,
    (error) => {
      if (onError) {
        onError(error);
      }
      return Promise.reject(error);
    }
  );

  return client;
};

export default createApiClient;