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
import { IsJSONValue } from "../../validators";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { PatientWhereUniqueInput } from "../../patient/base/PatientWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumReportTypeField } from "./EnumReportTypeField";

@InputType()
class ReportCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  file?: InputJsonValue;

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
    enum: EnumReportTypeField,
  })
  @IsEnum(EnumReportTypeField)
  @IsOptional()
  @Field(() => EnumReportTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;
}

export { ReportCreateInput as ReportCreateInput };