import { Injectable } from '@nestjs/common';
import { Post } from './contract';

@Injectable()
export class PostsService {
  getPosts(): Post[] {
    return [
      {
        id: '1',
        title: 'hi',
        description: 'hello',
      },
    ];
  }
}
