import { ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("JsonDataDtoObject")
class JsonDataDto {
    @Field(() => GraphQLJSON)
    data!: InputJsonValue;
}

export { JsonDataDto as JsonDataDto };