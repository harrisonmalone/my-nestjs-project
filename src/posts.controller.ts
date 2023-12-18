import { Controller } from '@nestjs/common';
import { PostsService } from './posts.service';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import { contract } from './contract';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @TsRestHandler(contract.getPosts)
  async getPosts() {
    return tsRestHandler(contract.getPosts, async () => {
      return {
        status: 200,
        body: this.postsService.getPosts(),
      };
    });
  }
}
