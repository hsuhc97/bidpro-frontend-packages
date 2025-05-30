import { ApiClient, PaginationApi } from "../..";
import { Message, MessagePreviews } from "./types";

export const getPreview: () => Promise<MessagePreviews> = async () => {
  const response = await ApiClient.getInstance()
    .getClient()
    .get("/api/client/message/preview");
  return response.data;
};

export const getUnreadCount: () => Promise<number> = async () => {
  const response = await ApiClient.getInstance()
    .getClient()
    .get("/api/client/message/unread-count");
  return response.data;
};

export const query: PaginationApi<Message> = async (params) => {
  const response = await ApiClient.getInstance()
    .getClient()
    .post("/api/client/message/query", params);
  return response.data;
};

export const read: (id: string) => Promise<void> = async (id) => {
  const response = await ApiClient.getInstance()
    .getClient()
    .put(`/api/client/message/read?id=${id}`);
  return response.data;
};

export const readAll: (type: string) => Promise<void> = async (type) => {
  const response = await ApiClient.getInstance()
    .getClient()
    .post(`/api/client/message/read`, { type });
  return response.data;
};