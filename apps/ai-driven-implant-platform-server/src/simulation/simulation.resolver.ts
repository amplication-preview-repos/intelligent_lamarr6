import * as graphql from "@nestjs/graphql";
import { SimulationResolverBase } from "./base/simulation.resolver.base";
import { Simulation } from "./base/Simulation";
import { SimulationService } from "./simulation.service";

@graphql.Resolver(() => Simulation)
export class SimulationResolver extends SimulationResolverBase {
  constructor(protected readonly service: SimulationService) {
    super(service);
  }
}
