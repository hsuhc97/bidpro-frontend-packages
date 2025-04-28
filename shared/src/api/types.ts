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
    total: number;
    pageNum: number;
    pageSize: number;
    list: T[];
}

export interface PaginationParams {
    pageNum?: number;
    pageSize?: number;
}