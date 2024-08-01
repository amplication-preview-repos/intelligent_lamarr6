import { Module } from "@nestjs/common";
import { SimulationModuleBase } from "./base/simulation.module.base";
import { SimulationService } from "./simulation.service";
import { SimulationController } from "./simulation.controller";
import { SimulationResolver } from "./simulation.resolver";

@Module({
  imports: [SimulationModuleBase],
  controllers: [SimulationController],
  providers: [SimulationService, SimulationResolver],
  exports: [SimulationService],
})
export class SimulationModule {}
