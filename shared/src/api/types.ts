export type ApiClientOptions = {
  baseURL: string;
  token?: string;
  onError?: (error: any) => void;
};

export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

export interface PaginatedResponse<T> {
  list: T[];
  total: number;
  pages: number;
  pageNum: number;
  pageSize: number;
}

export interface PaginationParams {
  pageNum?: number;
  pageSize?: number;
}

export interface PaginationApi<T> {
  (params: PaginationParams): Promise<PaginatedResponse<T>>;
}
