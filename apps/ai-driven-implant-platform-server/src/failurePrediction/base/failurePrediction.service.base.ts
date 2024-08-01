/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  FailurePrediction as PrismaFailurePrediction,
  Implant as PrismaImplant,
  Patient as PrismaPatient,
} from "@prisma/client";

export class FailurePredictionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.FailurePredictionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.failurePrediction.count(args);
  }

  async failurePredictions(
    args: Prisma.FailurePredictionFindManyArgs
  ): Promise<PrismaFailurePrediction[]> {
    return this.prisma.failurePrediction.findMany(args);
  }
  async failurePrediction(
    args: Prisma.FailurePredictionFindUniqueArgs
  ): Promise<PrismaFailurePrediction | null> {
    return this.prisma.failurePrediction.findUnique(args);
  }
  async createFailurePrediction(
    args: Prisma.FailurePredictionCreateArgs
  ): Promise<PrismaFailurePrediction> {
    return this.prisma.failurePrediction.create(args);
  }
  async updateFailurePrediction(
    args: Prisma.FailurePredictionUpdateArgs
  ): Promise<PrismaFailurePrediction> {
    return this.prisma.failurePrediction.update(args);
  }
  async deleteFailurePrediction(
    args: Prisma.FailurePredictionDeleteArgs
  ): Promise<PrismaFailurePrediction> {
    return this.prisma.failurePrediction.delete(args);
  }

  async getImplant(parentId: string): Promise<PrismaImplant | null> {
    return this.prisma.failurePrediction
      .findUnique({
        where: { id: parentId },
      })
      .implant();
  }

  async getPatient(parentId: string): Promise<PrismaPatient | null> {
    return this.prisma.failurePrediction
      .findUnique({
        where: { id: parentId },
      })
      .patient();
  }
}