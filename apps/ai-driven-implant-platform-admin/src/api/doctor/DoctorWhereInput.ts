import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PatientListRelationFilter } from "../patient/PatientListRelationFilter";

export type DoctorWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  patients?: PatientListRelationFilter;
  specialization?: StringNullableFilter;
};
