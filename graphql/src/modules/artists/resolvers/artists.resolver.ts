import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { BandsService } from 'src/modules/bands/services/bands.service';
import { ArtistsService } from '../services/artists.service';

@Resolver('Artist')
export class ArtistsResolver {
  constructor(
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
  ) {}

  @Query()
  async artist(@Args('id') id: string) {
    return await this.artistsService.get(id);
  }

  @Query()
  async artists(@Args() args) {
    return await this.artistsService.getAll(args);
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() artist) {
    const { bandsIds } = artist;
    return await Promise.all(
      bandsIds.map(async (id) => {
        return await this.bandsService.get(id);
      }),
    );
  }

  @Mutation()
  async createArtist(@Args() args, @Context('token') token: string) {
    return await this.artistsService.create(args, token);
  }

  @Mutation()
  async deleteArtist(@Args('id') id: string, @Context('token') token: string) {
    return await this.artistsService.delete(id, token);
  }

  @Mutation()
  async updateArtist(
    @Args('id') id: string,
    @Args() payload,
    @Context('token') token: string,
  ) {
    console.log(payload);
    return await this.artistsService.update(id, payload, token);
  }
}
