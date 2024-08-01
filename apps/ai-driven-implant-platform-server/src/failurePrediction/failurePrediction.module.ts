import { Module } from "@nestjs/common";
import { FailurePredictionModuleBase } from "./base/failurePrediction.module.base";
import { FailurePredictionService } from "./failurePrediction.service";
import { FailurePredictionController } from "./failurePrediction.controller";
import { FailurePredictionResolver } from "./failurePrediction.resolver";

@Module({
  imports: [FailurePredictionModuleBase],
  controllers: [FailurePredictionController],
  providers: [FailurePredictionService, FailurePredictionResolver],
  exports: [FailurePredictionService],
})
export class FailurePredictionModule {}
