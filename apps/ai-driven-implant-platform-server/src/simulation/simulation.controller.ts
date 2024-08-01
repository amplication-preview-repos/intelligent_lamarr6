import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SimulationService } from "./simulation.service";
import { SimulationControllerBase } from "./base/simulation.controller.base";

@swagger.ApiTags("simulations")
@common.Controller("simulations")
export class SimulationController extends SimulationControllerBase {
  constructor(protected readonly service: SimulationService) {
    super(service);
  }
}
