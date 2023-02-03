import { HelloWorldEntity } from '../models/entity/hello_world_entity';

export async function readHelloWorld(): Promise<HelloWorldEntity> {
  return {
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
