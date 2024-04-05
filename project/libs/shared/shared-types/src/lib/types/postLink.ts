import { Post } from 'libs/shared/shared-types/src/lib/types/post';

export interface PostLink extends Post {
  link: string;
  description?: string;
}
