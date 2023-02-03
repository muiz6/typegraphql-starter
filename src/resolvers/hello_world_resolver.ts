import { Arg, Query, Resolver } from 'type-graphql';
import { HelloWorldBase } from '../models/dto/hello_world_base';

import HelloWorldInput from '../models/inputs/hello_world_input';
import HelloWorld from '../models/types/hello_world';

@Resolver()
export default class HelloWorldResolver {
  @Query(() => HelloWorld)
  async helloWorld(@Arg('data', { nullable: true }) data?: HelloWorldInput): Promise<HelloWorldBase> {
    return {
      id: 1,
      createdAt: Math.round(new Date().getTime() / 1000),
    };
  }
}
