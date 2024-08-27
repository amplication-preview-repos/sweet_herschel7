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
import { TelegramMessageWhereInput } from "./TelegramMessageWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TelegramMessageOrderByInput } from "./TelegramMessageOrderByInput";

@ArgsType()
class TelegramMessageFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TelegramMessageWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TelegramMessageWhereInput, { nullable: true })
  @Type(() => TelegramMessageWhereInput)
  where?: TelegramMessageWhereInput;

  @ApiProperty({
    required: false,
    type: [TelegramMessageOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TelegramMessageOrderByInput], { nullable: true })
  @Type(() => TelegramMessageOrderByInput)
  orderBy?: Array<TelegramMessageOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TelegramMessageFindManyArgs as TelegramMessageFindManyArgs };
