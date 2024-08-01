import { ImplantWhereUniqueInput } from "../implant/ImplantWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type FailurePredictionCreateInput = {
  implant?: ImplantWhereUniqueInput | null;
  patient?: PatientWhereUniqueInput | null;
  prediction?: string | null;
};
