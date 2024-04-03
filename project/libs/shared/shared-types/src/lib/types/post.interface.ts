import { CommentsInterface } from 'libs/shared/shared-types/src/lib/types/comments.interface';

export interface PostInterface {
  author: string;
  repostAuthor?: string;
  repost?: boolean;
  id: string;
  originId?: string;
  state: 'published' | 'draft';
  detail: string;
  comments: CommentsInterface[];
  likes: string[];
  dateCreate: Date;
  datePublication: string;
  rating: number;
  tags?: string[];
}
