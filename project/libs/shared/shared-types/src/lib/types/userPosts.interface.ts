import { UserInterface } from 'libs/shared/shared-types/src/lib/types/user.interface';

export interface UserPostsInterface extends UserInterface {
  posts: string[];
  subscribers: string[];
}
