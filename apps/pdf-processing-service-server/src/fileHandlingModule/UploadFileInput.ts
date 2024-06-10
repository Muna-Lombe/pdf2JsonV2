import { ArgsType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
class UploadFileInput {
    @Field(() => GraphQLJSON)
    file!: InputJsonValue;
}

export { UploadFileInput as UploadFileInput };