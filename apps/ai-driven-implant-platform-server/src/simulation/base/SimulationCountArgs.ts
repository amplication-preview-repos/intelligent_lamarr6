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
import { SimulationWhereInput } from "./SimulationWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class SimulationCountArgs {
  @ApiProperty({
    required: false,
    type: () => SimulationWhereInput,
  })
  @Field(() => SimulationWhereInput, { nullable: true })
  @Type(() => SimulationWhereInput)
  where?: SimulationWhereInput;
}

export { SimulationCountArgs as SimulationCountArgs };