import { ImplantWhereUniqueInput } from "../implant/ImplantWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type RecommendationUpdateInput = {
  implant?: ImplantWhereUniqueInput | null;
  patient?: PatientWhereUniqueInput | null;
  reason?: string | null;
};