import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class JokeDTO {
  @Field(() => ID)
  id: string;

  @Field()
  icon_url: string;

  @Field()
  url: string;

  @Field()
  value: string;

  @Field(() => [String])
  categories: string[];

  @Field()
  created_at: string;

  @Field()
  updated_at: string;
}
