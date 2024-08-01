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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { ImplantWhereUniqueInput } from "../../implant/base/ImplantWhereUniqueInput";
import { PatientWhereUniqueInput } from "../../patient/base/PatientWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

@InputType()
class FailurePredictionWhereInput {
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
    type: () => ImplantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ImplantWhereUniqueInput)
  @IsOptional()
  @Field(() => ImplantWhereUniqueInput, {
    nullable: true,
  })
  implant?: ImplantWhereUniqueInput;

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
  patient?: PatientWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  prediction?: StringNullableFilter;
}

export { FailurePredictionWhereInput as FailurePredictionWhereInput };
