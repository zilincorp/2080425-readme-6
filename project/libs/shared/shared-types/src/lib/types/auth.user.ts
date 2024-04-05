import { User } from 'libs/shared/shared-types/src/lib/types/user';

export interface AuthUser extends User {
  passwordHash: string;
}
