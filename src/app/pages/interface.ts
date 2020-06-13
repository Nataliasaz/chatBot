export interface User {
  username: string;
  password: string;
  rememberMe?: boolean;
}

export interface SAuthResponse {
  idToken: string;
  expiresIn: string;
}
