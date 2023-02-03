import { FieldResolver, Resolver, Root } from 'type-graphql';

import { HelloWorldBase } from '../../models/dto/hello_world_base';
import HelloDev from '../../models/types/hello_dev';
import HelloWorld from '../../models/types/hello_world';

@Resolver(() => HelloWorld)
export default class HelloWorldResolver {
  @FieldResolver(() => HelloDev)
  async helloDev(@Root() parent: HelloWorldBase): Promise<HelloDev> {
    return {
      id: 10,
      name: 'Hello Dev!',
    };
  }
}
