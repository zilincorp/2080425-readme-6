import { Post } from 'libs/shared/shared-types/src/lib/types/post';

export interface PostQuote extends Post {
  quoteText: string;
  author: string;
}
