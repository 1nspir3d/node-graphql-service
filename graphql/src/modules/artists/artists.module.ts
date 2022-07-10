import { forwardRef, Module } from '@nestjs/common';
import { BandsModule } from '../bands/bands.module';
import { ArtistsResolver } from './resolvers/artists.resolver';
import { ArtistsService } from './services/artists.service';

@Module({
  imports: [forwardRef(() => BandsModule)],
  providers: [ArtistsResolver, ArtistsService],
  exports: [ArtistsService],
})
export class ArtistsModule {}
