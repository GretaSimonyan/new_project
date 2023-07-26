export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER',
}

export interface User {
  id: string;
  username: string;
  roles?: UserRole[];
  avatar?: string;
}

export interface UserSchema {
  authData?: User;
  _mounted: boolean;
}
