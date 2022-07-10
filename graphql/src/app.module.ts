import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './modules/users/users.module';
import { Request } from 'express';
import { GenresModule } from './modules/genres/genres.module';
import { BandsModule } from './modules/bands/bands.module';
import { ArtistsModule } from './modules/artists/artists.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.gql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      context: ({ req }: { req: Request }) => {
        return {
          token: req.headers.authorization,
        };
      },
    }),
    UsersModule,
    GenresModule,
    BandsModule,
    ArtistsModule,
  ],
})
export class AppModule {}
