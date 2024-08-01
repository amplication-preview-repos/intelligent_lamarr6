import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FailurePredictionService } from "./failurePrediction.service";
import { FailurePredictionControllerBase } from "./base/failurePrediction.controller.base";

@swagger.ApiTags("failurePredictions")
@common.Controller("failurePredictions")
export class FailurePredictionController extends FailurePredictionControllerBase {
  constructor(protected readonly service: FailurePredictionService) {
    super(service);
  }
}
