import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FailurePredictionServiceBase } from "./base/failurePrediction.service.base";

@Injectable()
export class FailurePredictionService extends FailurePredictionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
