export interface User {
  username: string;
  password: string;
  rememberMe?: boolean;
}
export interface SAuthResponse {
  id_token: string;
  status: string;
  expiresIn: string;
}
