import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ImplantServiceBase } from "./base/implant.service.base";

@Injectable()
export class ImplantService extends ImplantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
