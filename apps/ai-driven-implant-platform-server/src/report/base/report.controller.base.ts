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
import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FileInterceptor } from "@nestjs/platform-express";
import { ReportService } from "../report.service";
import { ReportCreateInput } from "./ReportCreateInput";
import { Report } from "./Report";
import { ReportFindManyArgs } from "./ReportFindManyArgs";
import { ReportWhereUniqueInput } from "./ReportWhereUniqueInput";
import { ReportUpdateInput } from "./ReportUpdateInput";

export class ReportControllerBase {
  constructor(protected readonly service: ReportService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Report })
  async createReport(@common.Body() data: ReportCreateInput): Promise<Report> {
    return await this.service.createReport({
      data: {
        ...data,

        patient: data.patient
          ? {
              connect: data.patient,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        file: true,
        id: true,

        patient: {
          select: {
            id: true,
          },
        },

        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Report] })
  @ApiNestedQuery(ReportFindManyArgs)
  async reports(@common.Req() request: Request): Promise<Report[]> {
    const args = plainToClass(ReportFindManyArgs, request.query);
    return this.service.reports({
      ...args,
      select: {
        createdAt: true,
        file: true,
        id: true,

        patient: {
          select: {
            id: true,
          },
        },

        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Report })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async report(
    @common.Param() params: ReportWhereUniqueInput
  ): Promise<Report | null> {
    const result = await this.service.report({
      where: params,
      select: {
        createdAt: true,
        file: true,
        id: true,

        patient: {
          select: {
            id: true,
          },
        },

        typeField: true,
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
  @swagger.ApiOkResponse({ type: Report })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateReport(
    @common.Param() params: ReportWhereUniqueInput,
    @common.Body() data: ReportUpdateInput
  ): Promise<Report | null> {
    try {
      return await this.service.updateReport({
        where: params,
        data: {
          ...data,

          patient: data.patient
            ? {
                connect: data.patient,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          file: true,
          id: true,

          patient: {
            select: {
              id: true,
            },
          },

          typeField: true,
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
  @swagger.ApiOkResponse({ type: Report })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteReport(
    @common.Param() params: ReportWhereUniqueInput
  ): Promise<Report | null> {
    try {
      return await this.service.deleteReport({
        where: params,
        select: {
          createdAt: true,
          file: true,
          id: true,

          patient: {
            select: {
              id: true,
            },
          },

          typeField: true,
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

  @common.Put(":id/file")
  @common.UseInterceptors(FileInterceptor("file"))
  @swagger.ApiConsumes("multipart/form-data")
  @swagger.ApiBody({
    schema: {
      type: "object",

      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiCreatedResponse({
    type: Report,
    status: "2XX",
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async uploadFile(
    @common.Param()
    params: ReportWhereUniqueInput,
    @common.UploadedFile()
    file: Express.Multer.File
  ): Promise<Report> {
    return this.service.uploadFile(
      {
        where: params,
      },
      Object.assign(file, {
        filename: file.originalname,
      })
    );
  }

  @common.Get(":id/file")
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiOkResponse({
    type: common.StreamableFile,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async downloadFile(
    @common.Param()
    params: ReportWhereUniqueInput,
    @common.Res({
      passthrough: true,
    })
    res: Response
  ): Promise<common.StreamableFile> {
    const result = await this.service.downloadFile({
      where: params,
    });

    if (result === null) {
      throw new errors.NotFoundException(
        "No resource was found for ",
        JSON.stringify(params)
      );
    }

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${result.filename}`
    );
    res.setHeader("Content-Type", result.mimetype);
    return result.stream;
  }

  @common.Delete(":id/file")
  @swagger.ApiOkResponse({
    type: Report,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async deleteFile(
    @common.Param()
    params: ReportWhereUniqueInput
  ): Promise<Report> {
    return this.service.deleteFile({
      where: params,
    });
  }
}
