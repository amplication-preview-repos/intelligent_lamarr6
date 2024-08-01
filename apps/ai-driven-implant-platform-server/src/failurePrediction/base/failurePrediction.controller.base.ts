/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FailurePredictionService } from "../failurePrediction.service";
import { FailurePredictionCreateInput } from "./FailurePredictionCreateInput";
import { FailurePrediction } from "./FailurePrediction";
import { FailurePredictionFindManyArgs } from "./FailurePredictionFindManyArgs";
import { FailurePredictionWhereUniqueInput } from "./FailurePredictionWhereUniqueInput";
import { FailurePredictionUpdateInput } from "./FailurePredictionUpdateInput";

export class FailurePredictionControllerBase {
  constructor(protected readonly service: FailurePredictionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FailurePrediction })
  async createFailurePrediction(
    @common.Body() data: FailurePredictionCreateInput
  ): Promise<FailurePrediction> {
    return await this.service.createFailurePrediction({
      data: {
        ...data,

        implant: data.implant
          ? {
              connect: data.implant,
            }
          : undefined,

        patient: data.patient
          ? {
              connect: data.patient,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        implant: {
          select: {
            id: true,
          },
        },

        patient: {
          select: {
            id: true,
          },
        },

        prediction: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [FailurePrediction] })
  @ApiNestedQuery(FailurePredictionFindManyArgs)
  async failurePredictions(
    @common.Req() request: Request
  ): Promise<FailurePrediction[]> {
    const args = plainToClass(FailurePredictionFindManyArgs, request.query);
    return this.service.failurePredictions({
      ...args,
      select: {
        createdAt: true,
        id: true,

        implant: {
          select: {
            id: true,
          },
        },

        patient: {
          select: {
            id: true,
          },
        },

        prediction: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FailurePrediction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async failurePrediction(
    @common.Param() params: FailurePredictionWhereUniqueInput
  ): Promise<FailurePrediction | null> {
    const result = await this.service.failurePrediction({
      where: params,
      select: {
        createdAt: true,
        id: true,

        implant: {
          select: {
            id: true,
          },
        },

        patient: {
          select: {
            id: true,
          },
        },

        prediction: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FailurePrediction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFailurePrediction(
    @common.Param() params: FailurePredictionWhereUniqueInput,
    @common.Body() data: FailurePredictionUpdateInput
  ): Promise<FailurePrediction | null> {
    try {
      return await this.service.updateFailurePrediction({
        where: params,
        data: {
          ...data,

          implant: data.implant
            ? {
                connect: data.implant,
              }
            : undefined,

          patient: data.patient
            ? {
                connect: data.patient,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          implant: {
            select: {
              id: true,
            },
          },

          patient: {
            select: {
              id: true,
            },
          },

          prediction: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FailurePrediction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFailurePrediction(
    @common.Param() params: FailurePredictionWhereUniqueInput
  ): Promise<FailurePrediction | null> {
    try {
      return await this.service.deleteFailurePrediction({
        where: params,
        select: {
          createdAt: true,
          id: true,

          implant: {
            select: {
              id: true,
            },
          },

          patient: {
            select: {
              id: true,
            },
          },

          prediction: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
