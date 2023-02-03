import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export default class HelloDev {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
