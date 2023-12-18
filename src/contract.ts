import { Post } from '@nestjs/common';
import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
});

export type Post = z.infer<typeof PostSchema>;

export const contract = c.router({
  getPosts: {
    method: 'GET',
    path: '/posts',
    responses: {
      200: z.array(PostSchema),
    },
    summary: 'Get posts',
    strictStatusCodes: true,
  },
});
