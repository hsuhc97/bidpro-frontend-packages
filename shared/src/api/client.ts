import axios, { AxiosInstance, AxiosError } from "axios"
import { RedirectError, UnauthorizedError } from "../errors";

interface ApiClientConfig {
  baseURL: string;
  token?: string;
  onUnauthorized?: () => void;
  onRedirect?: (url: string) => void;
}

class ApiClient {
  private static instance: ApiClient;
  private client: AxiosInstance;
  private config: ApiClientConfig;

  private constructor(config: ApiClientConfig) {
    this.config = config;
    this.client = axios.create({
      baseURL: config.baseURL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
        ...(config.token && { Authorization: `Bearer ${config.token}` }),
      },
    });

    this.client.interceptors.response.use(
      (response) => {
        if (response.data.code == 200) {
          return response.data;
        }
        if (response.data.code === 302) {
          this.config.onRedirect?.(response.data.data);
          return Promise.reject(new RedirectError(response.data.data));
        }
        if (response.data.code === 401) {
          this.config.onUnauthorized?.();
          return Promise.reject(new UnauthorizedError());
        }
        return Promise.reject(Error(response.data.msg));
      },
      (error: AxiosError) => {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            this.config.onUnauthorized?.();
            return Promise.reject(new UnauthorizedError());
          }
          if (
            error.code === "ECONNABORTED" ||
            error.code === "ETIMEDOUT" ||
            error.code === "ERR_NETWORK"
          ) {
            return Promise.reject(Error("网络请求超时"));
          }
        }
        return Promise.reject(error);
      }
    );
  }

  public static getInstance(config?: ApiClientConfig): ApiClient {
    if (!ApiClient.instance) {
      if (!config) {
        throw new Error(
          "Initial configuration is required for first instantiation"
        );
      }
      ApiClient.instance = new ApiClient(config);
    }
    return ApiClient.instance;
  }

  public setBaseUrl(baseURL: string): void {
    this.config.baseURL = baseURL;
    this.client.defaults.baseURL = baseURL;
  }

  public setToken(token: string): void {
    this.config.token = token;
    this.client.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  public getClient(): AxiosInstance {
    return this.client;
  }
}

export default ApiClient;
