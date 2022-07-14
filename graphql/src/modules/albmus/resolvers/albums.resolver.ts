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
import { BandsService } from 'src/modules/bands/services/bands.service';
import { GenresService } from 'src/modules/genres/services/genres/genres.service';
import { TracksService } from 'src/modules/tracks/services/tracks.service';
import { AlbumsService } from '../services/albums.service';

@Resolver('Album')
export class AlbumsResolver {
  constructor(
    private readonly albumsService: AlbumsService,
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
    private readonly tracksService: TracksService,
    private readonly genresService: GenresService,
  ) {}

  @Query()
  async album(@Args('id') id: string) {
    return await this.albumsService.get(id);
  }

  @Query()
  async albums(@Args() args) {
    return await this.albumsService.getAll(args);
  }

  @Resolver()
  @ResolveField()
  async artists(@Parent() album) {
    const { artistsIds } = album;
    return await Promise.all(
      artistsIds.map(async (id) => {
        return await this.artistsService.get(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() album) {
    const { bandsIds } = album;
    return await Promise.all(
      bandsIds.map(async (id) => {
        return await this.bandsService.get(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async tracks(@Parent() album) {
    const { trackIds } = album;
    return await Promise.all(
      trackIds.map(async (id) => {
        return await this.tracksService.get(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async genres(@Parent() album) {
    const { genresIds } = album;
    return await Promise.all(
      genresIds.map(async (id) => {
        return await this.genresService.get(id);
      }),
    );
  }

  @Mutation()
  async createAlbum(@Args() args, @Context('token') token: string) {
    return await this.albumsService.create(args, token);
  }

  @Mutation()
  async deleteAlbum(@Args('id') id: string, @Context('token') token: string) {
    return await this.albumsService.delete(id, token);
  }

  @Mutation()
  async updateAlbum(
    @Args('id') id: string,
    @Args() payload,
    @Context('token') token: string,
  ) {
    return await this.albumsService.update(id, payload, token);
  }
}
