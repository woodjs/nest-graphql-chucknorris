import { Injectable, Inject } from '@nestjs/common';
import { JOKE_REPOSITORY } from 'src/core/constants';
import { JokenorrisService } from 'src/jokenorris/jokenorris.service';
import { Joke } from './entities/joke.entity';

@Injectable()
export class JokesService {
  constructor(
    @Inject(JOKE_REPOSITORY) private readonly jokeRepository: typeof Joke,
    private readonly jokeNorrisService: JokenorrisService,
  ) {}

  async bulkCreate(arr): Promise<Joke[]> {
    return await this.jokeRepository.bulkCreate(arr);
  }

  async findAll(): Promise<Joke[]> {
    return await this.jokeRepository.findAll<Joke>();
  }

  async findByFilters(attr): Promise<string[]> {
    const { category, query, limit, addFavorite } = attr;
    const jokes = [];

    if (!category && !query) {
      const data = await this.jokeNorrisService.findRandom();
      jokes.push(data);
    }

    if (category) {
      const categories = await this.jokeNorrisService.findCategories();

      if (!categories.includes(category)) {
        throw Error('Такой категорий несуществует');
      }

      const data = await this.jokeNorrisService.findByCategory(category);

      jokes.push(data);
    }

    if (query) {
      if (query.length < 3)
        throw Error('Значение query должно быть более 2-х символов');

      const data = await this.jokeNorrisService.findByQuery(query);
      const { total, result } = data;

      if (total > 0) {
        result.forEach((item) => {
          jokes.push(item);
        });
      }
    }

    if (limit && jokes.length > limit) {
      jokes.length = limit;
    }

    if (addFavorite) {
      await this.bulkCreate(jokes);
    }

    return jokes;
  }
}
