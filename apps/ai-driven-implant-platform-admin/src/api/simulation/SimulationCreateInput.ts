import { ImplantWhereUniqueInput } from "../implant/ImplantWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type SimulationCreateInput = {
  implant?: ImplantWhereUniqueInput | null;
  notes?: string | null;
  patient?: PatientWhereUniqueInput | null;
};
