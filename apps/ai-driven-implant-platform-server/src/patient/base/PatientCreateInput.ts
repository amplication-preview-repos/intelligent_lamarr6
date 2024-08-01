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
import {
  IsInt,
  Min,
  Max,
  IsOptional,
  ValidateNested,
  IsEnum,
  IsString,
  MaxLength,
} from "class-validator";
import { DoctorWhereUniqueInput } from "../../doctor/base/DoctorWhereUniqueInput";
import { Type } from "class-transformer";
import { FailurePredictionCreateNestedManyWithoutPatientsInput } from "./FailurePredictionCreateNestedManyWithoutPatientsInput";
import { EnumPatientGender } from "./EnumPatientGender";
import { RecommendationCreateNestedManyWithoutPatientsInput } from "./RecommendationCreateNestedManyWithoutPatientsInput";
import { ReportCreateNestedManyWithoutPatientsInput } from "./ReportCreateNestedManyWithoutPatientsInput";
import { SimulationCreateNestedManyWithoutPatientsInput } from "./SimulationCreateNestedManyWithoutPatientsInput";

@InputType()
class PatientCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  age?: number | null;

  @ApiProperty({
    required: false,
    type: () => DoctorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DoctorWhereUniqueInput)
  @IsOptional()
  @Field(() => DoctorWhereUniqueInput, {
    nullable: true,
  })
  doctor?: DoctorWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => FailurePredictionCreateNestedManyWithoutPatientsInput,
  })
  @ValidateNested()
  @Type(() => FailurePredictionCreateNestedManyWithoutPatientsInput)
  @IsOptional()
  @Field(() => FailurePredictionCreateNestedManyWithoutPatientsInput, {
    nullable: true,
  })
  failurePredictions?: FailurePredictionCreateNestedManyWithoutPatientsInput;

  @ApiProperty({
    required: false,
    enum: EnumPatientGender,
  })
  @IsEnum(EnumPatientGender)
  @IsOptional()
  @Field(() => EnumPatientGender, {
    nullable: true,
  })
  gender?: "Option1" | null;

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
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => RecommendationCreateNestedManyWithoutPatientsInput,
  })
  @ValidateNested()
  @Type(() => RecommendationCreateNestedManyWithoutPatientsInput)
  @IsOptional()
  @Field(() => RecommendationCreateNestedManyWithoutPatientsInput, {
    nullable: true,
  })
  recommendations?: RecommendationCreateNestedManyWithoutPatientsInput;

  @ApiProperty({
    required: false,
    type: () => ReportCreateNestedManyWithoutPatientsInput,
  })
  @ValidateNested()
  @Type(() => ReportCreateNestedManyWithoutPatientsInput)
  @IsOptional()
  @Field(() => ReportCreateNestedManyWithoutPatientsInput, {
    nullable: true,
  })
  reports?: ReportCreateNestedManyWithoutPatientsInput;

  @ApiProperty({
    required: false,
    type: () => SimulationCreateNestedManyWithoutPatientsInput,
  })
  @ValidateNested()
  @Type(() => SimulationCreateNestedManyWithoutPatientsInput)
  @IsOptional()
  @Field(() => SimulationCreateNestedManyWithoutPatientsInput, {
    nullable: true,
  })
  simulations?: SimulationCreateNestedManyWithoutPatientsInput;
}

export { PatientCreateInput as PatientCreateInput };