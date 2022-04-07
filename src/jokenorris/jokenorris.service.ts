import { Injectable } from '@nestjs/common';
import { $request } from 'src/core/http';
import { JokeDTO } from 'src/jokes/dto/joke.dto';

@Injectable()
export class JokenorrisService {
  findCategories(): Promise<string[]> {
    return $request.get('/jokes/categories');
  }

  findByCategory(category: string): Promise<JokeDTO> {
    return $request.get(`/jokes/random?category=${category}`);
  }

  findByQuery(query: string): Promise<{ total: number; result: JokeDTO[] }> {
    return $request.get(`/jokes/search?query=${query}`);
  }

  findRandom(): Promise<JokeDTO> {
    return $request.get(`/jokes/random`);
  }
}
