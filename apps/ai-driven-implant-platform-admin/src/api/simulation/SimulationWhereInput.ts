import { StringFilter } from "../../util/StringFilter";
import { ImplantWhereUniqueInput } from "../implant/ImplantWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type SimulationWhereInput = {
  id?: StringFilter;
  implant?: ImplantWhereUniqueInput;
  notes?: StringNullableFilter;
  patient?: PatientWhereUniqueInput;
};
