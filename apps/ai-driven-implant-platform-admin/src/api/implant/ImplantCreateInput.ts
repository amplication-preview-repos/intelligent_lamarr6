import { FailurePredictionCreateNestedManyWithoutImplantsInput } from "./FailurePredictionCreateNestedManyWithoutImplantsInput";
import { RecommendationCreateNestedManyWithoutImplantsInput } from "./RecommendationCreateNestedManyWithoutImplantsInput";
import { SimulationCreateNestedManyWithoutImplantsInput } from "./SimulationCreateNestedManyWithoutImplantsInput";

export type ImplantCreateInput = {
  failurePredictions?: FailurePredictionCreateNestedManyWithoutImplantsInput;
  manufacturer?: string | null;
  name?: string | null;
  recommendations?: RecommendationCreateNestedManyWithoutImplantsInput;
  simulations?: SimulationCreateNestedManyWithoutImplantsInput;
  specifications?: string | null;
};
