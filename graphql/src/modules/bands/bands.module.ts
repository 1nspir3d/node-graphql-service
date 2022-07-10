import { Module } from '@nestjs/common';
import { ArtistsModule } from '../artists/artists.module';
import { GenresModule } from '../genres/genres.module';
import { BandsResolver } from './resolvers/bands.resolver';
import { BandsService } from './services/bands.service';

@Module({
  imports: [ArtistsModule, GenresModule],
  providers: [BandsResolver, BandsService],
  exports: [BandsService],
})
export class BandsModule {}
