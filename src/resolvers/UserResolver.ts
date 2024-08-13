import {
  Resolver,
  Query,
  Mutation,
  Arg,
  ObjectType,
  Field,
  ID,
} from "type-graphql";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

@ObjectType()
class User {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
}

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  async users() {
    return prisma.user.findMany();
  }

  @Mutation(() => User)
  async createUser(
    @Arg("name") name: string,
    @Arg("email") email: string
  ): Promise<User> {
    return prisma.user.create({ data: { name, email } });
  }
}
