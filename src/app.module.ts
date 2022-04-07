import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { JokesModule } from './jokes/jokes.module';
import { DatabaseModule } from './core/database/database.module';
import { JokenorrisModule } from './jokenorris/jokenorris.module';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'graphq-schema.gql'),
      playground: true,
    }),
    JokesModule,
    JokenorrisModule,
  ],
})
export class AppModule {}
