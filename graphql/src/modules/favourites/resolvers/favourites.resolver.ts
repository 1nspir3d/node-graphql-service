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
import { FavouritesService } from '../services/favourites.service';

@Resolver('Favourites')
export class FavouritesResolver {
  constructor(
    private readonly favouritesService: FavouritesService,
    private readonly tracksService: TracksService,
    private readonly bandsService: BandsService,
    private readonly artistsService: ArtistsService,
    private readonly genresService: GenresService,
  ) {}

  @Query()
  async favourites(@Context('token') token: string) {
    return await this.favouritesService.getAll(token);
  }

  @Resolver()
  @ResolveField()
  async tracks(@Parent() fav) {
    const { tracksIds } = fav;
    return await Promise.all(
      tracksIds.map(async (id) => {
        return await this.tracksService.get(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() fav) {
    const { bandsIds } = fav;
    return await Promise.all(
      bandsIds.map(async (id) => {
        return await this.bandsService.get(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async artists(@Parent() fav) {
    const { artistsIds } = fav;
    return await Promise.all(
      artistsIds.map(async (id) => {
        return await this.artistsService.get(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async genres(@Parent() fav) {
    const { genresIds } = fav;
    return await Promise.all(
      genresIds.map(async (id) => {
        return await this.genresService.get(id);
      }),
    );
  }

  @Mutation()
  async addTrackToFavourites(
    @Args('id') id: string,
    @Context('token') token: string,
  ) {
    return await this.favouritesService.add({ type: 'tracks', id }, token);
  }

  @Mutation()
  async addBandToFavourites(
    @Args('id') id: string,
    @Context('token') token: string,
  ) {
    return await this.favouritesService.add({ type: 'bands', id }, token);
  }

  @Mutation()
  async addArtistToFavourites(
    @Args('id') id: string,
    @Context('token') token: string,
  ) {
    return await this.favouritesService.add({ type: 'artists', id }, token);
  }

  @Mutation()
  async addGenreToFavourites(
    @Args('id') id: string,
    @Context('token') token: string,
  ) {
    return await this.favouritesService.add({ type: 'genres', id }, token);
  }
}
