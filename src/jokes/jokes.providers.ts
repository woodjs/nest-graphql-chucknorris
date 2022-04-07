import { JOKE_REPOSITORY } from 'src/core/constants';
import { Joke } from './entities/joke.entity';

export const jokesProviders = [
  {
    provide: JOKE_REPOSITORY,
    useValue: Joke,
  },
];
