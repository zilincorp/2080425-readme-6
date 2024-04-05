import { User } from 'libs/shared/shared-types/src/lib/types/user';

export interface Registration extends User {
  password: string;
  confirmPassword: string;
}
