# typegraphql-starter

An example codebase to easily get started with type-graphql.

GraphQL frameworks in NodeJS come in two flavours: Schema-first or code-first. In this example I've
setup a Node.js/TypeScript project to work with code-first approach.

## Why use code-first approach?

The code first approach helps keep your codebase DRY. You don't have to maintain the schema and
data classes separately or work on keeping them in sync.

## Libraries used

- [TypeScript](https://www.npmjs.com/package/typescript)
- [Express](https://www.npmjs.com/package/express)
- [Apollo GraphQL Server](https://www.npmjs.com/package/apollo-server-express)
- [TypeGraphQL](https://www.npmjs.com/package/type-graphql)

## Can I use JavaScript?

TypeGraphQL uses the type-definitions to generate the GraphQL schema for you. So you cannot
JavaScript with TypeGraphQL.

## Bonus

Additionally the project structure can be used as a guideline by students to structure their
projects properly.
