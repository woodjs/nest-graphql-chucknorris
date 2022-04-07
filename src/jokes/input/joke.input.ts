import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class JokeInput {
  @Field({ nullable: true })
  category: string;

  @Field({ nullable: true })
  query: string;

  @Field({ nullable: true })
  limit: number;

  @Field({ nullable: true })
  addFavorite: boolean;
}
