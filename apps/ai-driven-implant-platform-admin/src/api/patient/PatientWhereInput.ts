import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { FailurePredictionListRelationFilter } from "../failurePrediction/FailurePredictionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RecommendationListRelationFilter } from "../recommendation/RecommendationListRelationFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";
import { SimulationListRelationFilter } from "../simulation/SimulationListRelationFilter";

export type PatientWhereInput = {
  age?: IntNullableFilter;
  doctor?: DoctorWhereUniqueInput;
  failurePredictions?: FailurePredictionListRelationFilter;
  gender?: "Option1";
  id?: StringFilter;
  name?: StringNullableFilter;
  recommendations?: RecommendationListRelationFilter;
  reports?: ReportListRelationFilter;
  simulations?: SimulationListRelationFilter;
};
