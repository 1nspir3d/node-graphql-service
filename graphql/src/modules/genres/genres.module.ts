import { Module } from '@nestjs/common';
import { GenresResolver } from './resolvers/genres/genres.resolver';
import { GenresService } from './services/genres/genres.service';

@Module({
  providers: [GenresResolver, GenresService],
  exports: [GenresService],
})
export class GenresModule {}
