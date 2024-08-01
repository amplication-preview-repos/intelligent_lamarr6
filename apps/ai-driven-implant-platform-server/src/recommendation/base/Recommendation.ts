/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  ValidateNested,
  IsOptional,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { Implant } from "../../implant/base/Implant";
import { Patient } from "../../patient/base/Patient";

@ObjectType()
class Recommendation {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Implant,
  })
  @ValidateNested()
  @Type(() => Implant)
  @IsOptional()
  implant?: Implant | null;

  @ApiProperty({
    required: false,
    type: () => Patient,
  })
  @ValidateNested()
  @Type(() => Patient)
  @IsOptional()
  patient?: Patient | null;

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
  reason!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Recommendation as Recommendation };
