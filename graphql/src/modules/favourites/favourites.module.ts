import { Module } from '@nestjs/common';
import { ArtistsModule } from '../artists/artists.module';
import { BandsModule } from '../bands/bands.module';
import { GenresModule } from '../genres/genres.module';
import { TracksModule } from '../tracks/tracks.module';
import { FavouritesResolver } from './resolvers/favourites.resolver';
import { FavouritesService } from './services/favourites.service';

@Module({
  imports: [TracksModule, BandsModule, ArtistsModule, GenresModule],
  providers: [FavouritesResolver, FavouritesService],
})
export class FavouritesModule {}
