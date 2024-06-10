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
import { IsEnum, IsOptional, ValidateNested, IsInt } from "class-validator";
import { FileInputWhereUniqueInput } from "../../fileInput/base/FileInputWhereUniqueInput";
import { Type } from "class-transformer";
import { PageJsonDataUpdateManyWithoutPagesInput } from "./PageJsonDataUpdateManyWithoutPagesInput";
import { SectionUpdateManyWithoutPagesInput } from "./SectionUpdateManyWithoutPagesInput";

@InputType()
class PageUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumPageContentType,
  })
  @IsEnum(EnumPageContentType)
  @IsOptional()
  @Field(() => EnumPageContentType, {
    nullable: true,
  })
  contentType?: "Option1" | null;

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
  fileInput?: FileInputWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PageJsonDataUpdateManyWithoutPagesInput,
  })
  @ValidateNested()
  @Type(() => PageJsonDataUpdateManyWithoutPagesInput)
  @IsOptional()
  @Field(() => PageJsonDataUpdateManyWithoutPagesInput, {
    nullable: true,
  })
  pageJsonDataItems?: PageJsonDataUpdateManyWithoutPagesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  pageNumber?: number | null;

  @ApiProperty({
    required: false,
    type: () => SectionUpdateManyWithoutPagesInput,
  })
  @ValidateNested()
  @Type(() => SectionUpdateManyWithoutPagesInput)
  @IsOptional()
  @Field(() => SectionUpdateManyWithoutPagesInput, {
    nullable: true,
  })
  sections?: SectionUpdateManyWithoutPagesInput;
}

export { PageUpdateInput as PageUpdateInput };