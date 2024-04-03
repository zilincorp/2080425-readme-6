import { PostInterface } from 'libs/shared/shared-types/src/lib/types/post.interface';

export interface PostTextInterface extends PostInterface {
  announcement: string;
  text: string;
  tags?: string[];
}
