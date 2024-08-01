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
import { FailurePredictionWhereInput } from "./FailurePredictionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FailurePredictionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FailurePredictionWhereInput,
  })
  @ValidateNested()
  @Type(() => FailurePredictionWhereInput)
  @IsOptional()
  @Field(() => FailurePredictionWhereInput, {
    nullable: true,
  })
  every?: FailurePredictionWhereInput;

  @ApiProperty({
    required: false,
    type: () => FailurePredictionWhereInput,
  })
  @ValidateNested()
  @Type(() => FailurePredictionWhereInput)
  @IsOptional()
  @Field(() => FailurePredictionWhereInput, {
    nullable: true,
  })
  some?: FailurePredictionWhereInput;

  @ApiProperty({
    required: false,
    type: () => FailurePredictionWhereInput,
  })
  @ValidateNested()
  @Type(() => FailurePredictionWhereInput)
  @IsOptional()
  @Field(() => FailurePredictionWhereInput, {
    nullable: true,
  })
  none?: FailurePredictionWhereInput;
}
export { FailurePredictionListRelationFilter as FailurePredictionListRelationFilter };
