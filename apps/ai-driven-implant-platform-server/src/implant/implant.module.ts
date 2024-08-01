import { Module } from "@nestjs/common";
import { ImplantModuleBase } from "./base/implant.module.base";
import { ImplantService } from "./implant.service";
import { ImplantController } from "./implant.controller";
import { ImplantResolver } from "./implant.resolver";

@Module({
  imports: [ImplantModuleBase],
  controllers: [ImplantController],
  providers: [ImplantService, ImplantResolver],
  exports: [ImplantService],
})
export class ImplantModule {}
