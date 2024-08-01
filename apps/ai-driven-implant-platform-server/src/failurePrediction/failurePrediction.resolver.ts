import * as graphql from "@nestjs/graphql";
import { FailurePredictionResolverBase } from "./base/failurePrediction.resolver.base";
import { FailurePrediction } from "./base/FailurePrediction";
import { FailurePredictionService } from "./failurePrediction.service";

@graphql.Resolver(() => FailurePrediction)
export class FailurePredictionResolver extends FailurePredictionResolverBase {
  constructor(protected readonly service: FailurePredictionService) {
    super(service);
  }
}
