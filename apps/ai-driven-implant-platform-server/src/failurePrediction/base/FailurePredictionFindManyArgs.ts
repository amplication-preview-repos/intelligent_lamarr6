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
import { FailurePredictionWhereInput } from "./FailurePredictionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FailurePredictionOrderByInput } from "./FailurePredictionOrderByInput";

@ArgsType()
class FailurePredictionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FailurePredictionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FailurePredictionWhereInput, { nullable: true })
  @Type(() => FailurePredictionWhereInput)
  where?: FailurePredictionWhereInput;

  @ApiProperty({
    required: false,
    type: [FailurePredictionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FailurePredictionOrderByInput], { nullable: true })
  @Type(() => FailurePredictionOrderByInput)
  orderBy?: Array<FailurePredictionOrderByInput>;

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

export { FailurePredictionFindManyArgs as FailurePredictionFindManyArgs };
