/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "../../validators";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { PageWhereUniqueInput } from "../../page/base/PageWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumSectionTypeField } from "./EnumSectionTypeField";

@InputType()
class SectionCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  content?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => PageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PageWhereUniqueInput)
  @IsOptional()
  @Field(() => PageWhereUniqueInput, {
    nullable: true,
  })
  page?: PageWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumSectionTypeField,
  })
  @IsEnum(EnumSectionTypeField)
  @IsOptional()
  @Field(() => EnumSectionTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;
}

export { SectionCreateInput as SectionCreateInput };
