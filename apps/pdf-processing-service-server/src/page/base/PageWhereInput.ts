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
import { EnumPageContentType } from "./EnumPageContentType";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { FileInputWhereUniqueInput } from "../../fileInput/base/FileInputWhereUniqueInput";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { PageJsonDataListRelationFilter } from "../../pageJsonData/base/PageJsonDataListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SectionListRelationFilter } from "../../section/base/SectionListRelationFilter";

@InputType()
class PageWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumPageContentType,
  })
  @IsEnum(EnumPageContentType)
  @IsOptional()
  @Field(() => EnumPageContentType, {
    nullable: true,
  })
  contentType?: "Option1";

  @ApiProperty({
    required: false,
    type: () => FileInputWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FileInputWhereUniqueInput)
  @IsOptional()
  @Field(() => FileInputWhereUniqueInput, {
    nullable: true,
  })
  fileInput?: FileInputWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => PageJsonDataListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PageJsonDataListRelationFilter)
  @IsOptional()
  @Field(() => PageJsonDataListRelationFilter, {
    nullable: true,
  })
  pageJsonDataItems?: PageJsonDataListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  pageNumber?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => SectionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SectionListRelationFilter)
  @IsOptional()
  @Field(() => SectionListRelationFilter, {
    nullable: true,
  })
  sections?: SectionListRelationFilter;
}

export { PageWhereInput as PageWhereInput };
