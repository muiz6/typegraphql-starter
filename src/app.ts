import path from 'path';

import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchemaSync } from 'type-graphql';

const PORT = 4000;

const apolloServer = new ApolloServer({
  schema: buildSchemaSync({
    resolvers: [
      path.resolve(__dirname, './resolvers/**/*.ts'),
      path.resolve(__dirname, './resolvers/**/*.js'),
    ],
  }),
});

const expressApp = express();

async function main() {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: expressApp, path: '/' });
  expressApp.listen(PORT, () => console.log(`server is listening at port: ${PORT}`));
}

main();
