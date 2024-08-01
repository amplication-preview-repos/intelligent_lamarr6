import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { FailurePredictionCreateNestedManyWithoutPatientsInput } from "./FailurePredictionCreateNestedManyWithoutPatientsInput";
import { RecommendationCreateNestedManyWithoutPatientsInput } from "./RecommendationCreateNestedManyWithoutPatientsInput";
import { ReportCreateNestedManyWithoutPatientsInput } from "./ReportCreateNestedManyWithoutPatientsInput";
import { SimulationCreateNestedManyWithoutPatientsInput } from "./SimulationCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  age?: number | null;
  doctor?: DoctorWhereUniqueInput | null;
  failurePredictions?: FailurePredictionCreateNestedManyWithoutPatientsInput;
  gender?: "Option1" | null;
  name?: string | null;
  recommendations?: RecommendationCreateNestedManyWithoutPatientsInput;
  reports?: ReportCreateNestedManyWithoutPatientsInput;
  simulations?: SimulationCreateNestedManyWithoutPatientsInput;
};
