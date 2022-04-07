import { Resolver, Query, Args } from '@nestjs/graphql';

import { JokesService } from './jokes.service';
import { Joke } from './entities/joke.entity';
import { JokeDTO } from './dto/joke.dto';
import { JokeInput } from './input/joke.input';

@Resolver(() => Joke)
export class JokesResolver {
  constructor(private readonly jokesService: JokesService) {}

  @Query(() => [JokeDTO])
  async findAll() {
    return await this.jokesService.findAll();
  }

  @Query(() => [JokeDTO])
  async findByFilters(
    @Args({
      name: 'input',
      nullable: true,
    })
    jokeInput: JokeInput,
  ) {
    return await this.jokesService.findByFilters(jokeInput || {});
  }
}
