import { Field, Int, ObjectType } from 'type-graphql';

import HelloDev from './hello_dev';

@ObjectType()
export default class HelloWorld {
  @Field(() => Int)
  id: number;

  @Field()
  helloDev: HelloDev;

  @Field(() => Int, { deprecationReason: '' })
  createdAt: number;
}
