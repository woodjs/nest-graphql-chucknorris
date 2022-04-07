import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/database/database.module';

import { JokesResolver } from './jokes.resolver';
import { JokesService } from './jokes.service';
import { jokesProviders } from './jokes.providers';
import { JokenorrisModule } from 'src/jokenorris/jokenorris.module';

@Module({
  imports: [DatabaseModule, JokenorrisModule],
  providers: [JokesResolver, JokesService, ...jokesProviders],
})
export class JokesModule {}
