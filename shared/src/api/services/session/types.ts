export type SpaceLoginRequest = {
  domain: string;
  type: number;
  identifier: string;
  credential: string;
  config: string;
};

export type UserLoginResult = {
  id: string;
  status: number;
  token: string;
}