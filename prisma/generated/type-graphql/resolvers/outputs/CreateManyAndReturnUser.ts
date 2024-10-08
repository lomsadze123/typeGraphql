import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CreateManyAndReturnUser", {})
export class CreateManyAndReturnUser {
    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    id!: number;

    @TypeGraphQL.Field(_type => String, {
            nullable: false
        })
    name!: string;

    @TypeGraphQL.Field(_type => String, {
            nullable: false
        })
    email!: string;
}
