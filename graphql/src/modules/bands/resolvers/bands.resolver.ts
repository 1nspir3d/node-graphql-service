import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ArtistsService } from 'src/modules/artists/services/artists.service';
import { GenresService } from 'src/modules/genres/services/genres/genres.service';
import { BandsService } from '../services/bands.service';

@Resolver('Band')
export class BandsResolver {
  constructor(
    private readonly bandsService: BandsService,
    private readonly artistsService: ArtistsService,
    private readonly genresService: GenresService,
  ) {}

  @Query()
  async band(@Args('id') id: string) {
    return await this.bandsService.get(id);
  }

  @Query()
  async bands(@Args() args) {
    return await this.bandsService.getAll(args);
  }

  @Resolver()
  @ResolveField()
  async members(@Parent() band) {
    const { members } = band;
    return (
      await Promise.all(
        members.map(async (member) => {
          return this.artistsService.get(member.id);
        }),
      )
    ).map((artist, index) => ({
      id: artist.id,
      artist,
      instrument: members[index].instrument,
      year: members[index].year,
    }));
  }

  @Resolver()
  @ResolveField()
  async genres(@Parent() band) {
    const { genresIds } = band;
    return await Promise.all(
      genresIds.map(async (id) => {
        return await this.genresService.get(id);
      }),
    );
  }

  @Mutation()
  async createBand(@Args() args, @Context('token') token: string) {
    return await this.bandsService.create(args, token);
  }

  @Mutation()
  async deleteBand(@Args('id') id: string, @Context('token') token: string) {
    return await this.bandsService.delete(id, token);
  }

  @Mutation()
  async updateBand(
    @Args('id') id: string,
    @Args() payload,
    @Context('token') token: string,
  ) {
    return await this.bandsService.update(id, payload, token);
  }
}
