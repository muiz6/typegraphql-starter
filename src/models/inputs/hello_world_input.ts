import { Field, InputType, Int } from 'type-graphql';

@InputType()
export default class HelloWorldInput {
  @Field(() => Int, { nullable: true })
  id?: number;
}
