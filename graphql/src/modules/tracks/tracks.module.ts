import { forwardRef, Module } from '@nestjs/common';
import { AlbumsModule } from '../albmus/albums.module';
import { ArtistsModule } from '../artists/artists.module';
import { BandsModule } from '../bands/bands.module';
import { GenresModule } from '../genres/genres.module';
import { TracksResolver } from './resolvers/tracks.resolver';
import { TracksService } from './services/tracks.service';

@Module({
  imports: [
    ArtistsModule,
    BandsModule,
    GenresModule,
    forwardRef(() => AlbumsModule),
  ],
  providers: [TracksResolver, TracksService],
  exports: [TracksService],
})
export class TracksModule {}
