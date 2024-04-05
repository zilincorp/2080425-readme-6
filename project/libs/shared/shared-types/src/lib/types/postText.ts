import { Post } from 'libs/shared/shared-types/src/lib/types/post';

export interface PostText extends Post {
  announcement: string;
  text: string;
  tags?: string[];
}
