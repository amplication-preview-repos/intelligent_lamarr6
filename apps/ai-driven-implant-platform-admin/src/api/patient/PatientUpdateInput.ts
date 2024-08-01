import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { FailurePredictionUpdateManyWithoutPatientsInput } from "./FailurePredictionUpdateManyWithoutPatientsInput";
import { RecommendationUpdateManyWithoutPatientsInput } from "./RecommendationUpdateManyWithoutPatientsInput";
import { ReportUpdateManyWithoutPatientsInput } from "./ReportUpdateManyWithoutPatientsInput";
import { SimulationUpdateManyWithoutPatientsInput } from "./SimulationUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  age?: number | null;
  doctor?: DoctorWhereUniqueInput | null;
  failurePredictions?: FailurePredictionUpdateManyWithoutPatientsInput;
  gender?: "Option1" | null;
  name?: string | null;
  recommendations?: RecommendationUpdateManyWithoutPatientsInput;
  reports?: ReportUpdateManyWithoutPatientsInput;
  simulations?: SimulationUpdateManyWithoutPatientsInput;
};
