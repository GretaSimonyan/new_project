export interface User {
  id: string;
  username: string;
  role?: string;
  avatar?: string;
}

export interface UserSchema {
  authData?: User;
  _mounted: boolean;
}
