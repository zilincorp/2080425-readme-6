import { CommentsInterface } from 'libs/shared/shared-types/src/lib/types/comments.interface';

export interface PostInterface {
  author: string;
  id: string;
  detail: string;
  comments: CommentsInterface[];
  likes: string[];
  dateCreate: Date;
  datePublication: string;
  rating: number;
  tags?: string[];
}
