import * as graphql from "@nestjs/graphql";
import { ImplantResolverBase } from "./base/implant.resolver.base";
import { Implant } from "./base/Implant";
import { ImplantService } from "./implant.service";

@graphql.Resolver(() => Implant)
export class ImplantResolver extends ImplantResolverBase {
  constructor(protected readonly service: ImplantService) {
    super(service);
  }
}
