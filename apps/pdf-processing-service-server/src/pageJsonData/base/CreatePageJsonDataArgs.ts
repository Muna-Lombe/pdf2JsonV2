/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PageJsonDataCreateInput } from "./PageJsonDataCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreatePageJsonDataArgs {
  @ApiProperty({
    required: true,
    type: () => PageJsonDataCreateInput,
  })
  @ValidateNested()
  @Type(() => PageJsonDataCreateInput)
  @Field(() => PageJsonDataCreateInput, { nullable: false })
  data!: PageJsonDataCreateInput;
}

export { CreatePageJsonDataArgs as CreatePageJsonDataArgs };
