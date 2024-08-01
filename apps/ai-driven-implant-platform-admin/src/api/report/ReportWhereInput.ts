import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type ReportWhereInput = {
  file?: JsonFilter;
  id?: StringFilter;
  patient?: PatientWhereUniqueInput;
  typeField?: "Option1";
};
