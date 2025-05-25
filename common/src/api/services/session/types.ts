export type LoginRequest = {
  type: string;
  identifier: string;
  credential: string;
  config?: string;
};

export type LoginResult = {
  id: string;
  token: string;
}