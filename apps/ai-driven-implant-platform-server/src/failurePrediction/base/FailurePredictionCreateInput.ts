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
import { ImplantWhereUniqueInput } from "../../implant/base/ImplantWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { PatientWhereUniqueInput } from "../../patient/base/PatientWhereUniqueInput";

@InputType()
class FailurePredictionCreateInput {
  @ApiProperty({
    required: false,
    type: () => ImplantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ImplantWhereUniqueInput)
  @IsOptional()
  @Field(() => ImplantWhereUniqueInput, {
    nullable: true,
  })
  implant?: ImplantWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PatientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PatientWhereUniqueInput)
  @IsOptional()
  @Field(() => PatientWhereUniqueInput, {
    nullable: true,
  })
  patient?: PatientWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  prediction?: string | null;
}

export { FailurePredictionCreateInput as FailurePredictionCreateInput };
