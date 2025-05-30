export type LoginRequest = {
  type: string;
  identifier: string;
  credential: string;
  config?: string;
};

export type LoginResult = {
  id: string;
  userId: string;
  status: string;
  token: string;
}