import { FailurePredictionListRelationFilter } from "../failurePrediction/FailurePredictionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RecommendationListRelationFilter } from "../recommendation/RecommendationListRelationFilter";
import { SimulationListRelationFilter } from "../simulation/SimulationListRelationFilter";

export type ImplantWhereInput = {
  failurePredictions?: FailurePredictionListRelationFilter;
  id?: StringFilter;
  manufacturer?: StringNullableFilter;
  name?: StringNullableFilter;
  recommendations?: RecommendationListRelationFilter;
  simulations?: SimulationListRelationFilter;
  specifications?: StringNullableFilter;
};
