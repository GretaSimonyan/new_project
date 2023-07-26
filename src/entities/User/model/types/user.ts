import { UserRole } from '../consts/consts';

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
