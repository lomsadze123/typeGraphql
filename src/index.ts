import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { PrismaClient } from "@prisma/client";
import { UserResolver } from "./resolvers/UserResolver";

const main = async () => {
  const prisma = new PrismaClient();
  const schema = await buildSchema({
    resolvers: [UserResolver],
  });

  const server = new ApolloServer({
    schema,
    context: () => ({ prisma }),
  });

  const app = express();
  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () =>
    console.log("Server is running on http://localhost:4000/graphql")
  );
};

try {
  main();
} catch (error) {
  console.error(error);
  process.exit(1);
}
