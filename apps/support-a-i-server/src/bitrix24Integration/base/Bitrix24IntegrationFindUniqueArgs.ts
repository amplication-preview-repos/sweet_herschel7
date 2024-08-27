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
import { Bitrix24IntegrationWhereUniqueInput } from "./Bitrix24IntegrationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class Bitrix24IntegrationFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => Bitrix24IntegrationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => Bitrix24IntegrationWhereUniqueInput)
  @Field(() => Bitrix24IntegrationWhereUniqueInput, { nullable: false })
  where!: Bitrix24IntegrationWhereUniqueInput;
}

export { Bitrix24IntegrationFindUniqueArgs as Bitrix24IntegrationFindUniqueArgs };
