import { PostInterface } from 'libs/shared/shared-types/src/lib/types/post.interface';

export interface PostLinkInterface extends PostInterface {
  link: string;
  description?: string;
}
