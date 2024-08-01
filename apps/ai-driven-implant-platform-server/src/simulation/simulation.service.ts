import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SimulationServiceBase } from "./base/simulation.service.base";

@Injectable()
export class SimulationService extends SimulationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
