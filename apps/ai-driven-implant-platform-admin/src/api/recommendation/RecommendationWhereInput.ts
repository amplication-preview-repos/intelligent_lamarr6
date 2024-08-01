import { StringFilter } from "../../util/StringFilter";
import { ImplantWhereUniqueInput } from "../implant/ImplantWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RecommendationWhereInput = {
  id?: StringFilter;
  implant?: ImplantWhereUniqueInput;
  patient?: PatientWhereUniqueInput;
  reason?: StringNullableFilter;
};
