import { User } from 'libs/shared/shared-types/src/lib/types/user';

export interface UserPosts extends User {
  ownPosts: string[];
  repostPosts: string[];
  subscribers: string[];
}
