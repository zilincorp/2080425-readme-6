import { UserInterface } from 'libs/shared/shared-types/src/lib/types/user.interface';

export interface RegistrationInterface extends UserInterface {
  password: string;
  confirmPassword: string;
}
