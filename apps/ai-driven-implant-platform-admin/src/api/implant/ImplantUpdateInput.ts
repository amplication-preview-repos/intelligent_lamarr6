import { FailurePredictionUpdateManyWithoutImplantsInput } from "./FailurePredictionUpdateManyWithoutImplantsInput";
import { RecommendationUpdateManyWithoutImplantsInput } from "./RecommendationUpdateManyWithoutImplantsInput";
import { SimulationUpdateManyWithoutImplantsInput } from "./SimulationUpdateManyWithoutImplantsInput";

export type ImplantUpdateInput = {
  failurePredictions?: FailurePredictionUpdateManyWithoutImplantsInput;
  manufacturer?: string | null;
  name?: string | null;
  recommendations?: RecommendationUpdateManyWithoutImplantsInput;
  simulations?: SimulationUpdateManyWithoutImplantsInput;
  specifications?: string | null;
};
