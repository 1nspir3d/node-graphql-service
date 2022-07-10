import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GenresService } from '../../services/genres/genres.service';

@Resolver('Genre')
export class GenresResolver {
  constructor(private readonly genresService: GenresService) {}

  @Query()
  async genre(@Args('id') id: string) {
    return await this.genresService.get(id);
  }

  @Query()
  async genres(@Args() args) {
    return await this.genresService.getAll(args);
  }

  @Mutation()
  async createGenre(@Args() args, @Context('token') token: string) {
    return await this.genresService.create(args, token);
  }

  @Mutation()
  async deleteGenre(@Args('id') id: string, @Context('token') token: string) {
    const hui = await this.genresService.delete(id, token);
    return hui;
  }

  @Mutation()
  async updateGenre(
    @Args('id') id: string,
    @Args() args,
    @Context('token') token: string,
  ) {
    const payload = { ...args };
    delete payload.id;
    return await this.genresService.update(id, payload, token);
  }
}
