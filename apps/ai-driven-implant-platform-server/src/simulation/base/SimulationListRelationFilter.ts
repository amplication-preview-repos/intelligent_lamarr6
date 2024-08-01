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
import { SimulationWhereInput } from "./SimulationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SimulationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SimulationWhereInput,
  })
  @ValidateNested()
  @Type(() => SimulationWhereInput)
  @IsOptional()
  @Field(() => SimulationWhereInput, {
    nullable: true,
  })
  every?: SimulationWhereInput;

  @ApiProperty({
    required: false,
    type: () => SimulationWhereInput,
  })
  @ValidateNested()
  @Type(() => SimulationWhereInput)
  @IsOptional()
  @Field(() => SimulationWhereInput, {
    nullable: true,
  })
  some?: SimulationWhereInput;

  @ApiProperty({
    required: false,
    type: () => SimulationWhereInput,
  })
  @ValidateNested()
  @Type(() => SimulationWhereInput)
  @IsOptional()
  @Field(() => SimulationWhereInput, {
    nullable: true,
  })
  none?: SimulationWhereInput;
}
export { SimulationListRelationFilter as SimulationListRelationFilter };