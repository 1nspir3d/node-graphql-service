import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AlbumsService } from 'src/modules/albmus/services/albums.service';
import { ArtistsService } from 'src/modules/artists/services/artists.service';
import { BandsService } from 'src/modules/bands/services/bands.service';
import { GenresService } from 'src/modules/genres/services/genres/genres.service';
import { TracksService } from '../services/tracks.service';

@Resolver('Track')
export class TracksResolver {
  constructor(
    private readonly tracksService: TracksService,
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
    private readonly albumsService: AlbumsService,
  ) {}

  @Query()
  async track(@Args('id') id: string) {
    return await this.tracksService.get(id);
  }

  @Query()
  async tracks(@Args() args) {
    return await this.tracksService.getAll(args);
  }

  @Resolver()
  @ResolveField()
  async album(@Parent() track) {
    const { albumId } = track;
    return await this.albumsService.get(albumId);
  }

  @Resolver()
  @ResolveField()
  async artists(@Parent() track) {
    const { artistsIds } = track;
    console.log('artistsIds: ', artistsIds);
    return await Promise.all(
      artistsIds.map(async (id) => {
        return await this.artistsService.get(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() track) {
    const { bandsIds } = track;
    console.log('bandsIds: ', bandsIds);
    return await Promise.all(
      bandsIds.map(async (id) => {
        return await this.bandsService.get(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async genres(@Parent() track) {
    const { genresIds } = track;
    console.log('genresIds: ', genresIds);
    return await Promise.all(
      genresIds.map(async (id) => {
        return await this.genresService.get(id);
      }),
    );
  }

  @Mutation()
  async createTrack(@Args() payload, @Context('token') token: string) {
    return await this.tracksService.create(payload, token);
  }

  @Mutation()
  async deleteTrack(@Args('id') id: string, @Context('token') token: string) {
    return await this.tracksService.delete(id, token);
  }

  @Mutation()
  async updateTrack(
    @Args('id') id: string,
    @Args() payload,
    @Context('token') token: string,
  ) {
    return await this.tracksService.update(id, payload, token);
  }
}
