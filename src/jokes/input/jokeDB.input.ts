import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class JokeDBInput {
  @Field()
  value: string;
}
