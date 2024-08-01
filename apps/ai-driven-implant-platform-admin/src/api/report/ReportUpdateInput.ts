import { InputJsonValue } from "../../types";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type ReportUpdateInput = {
  file?: InputJsonValue;
  patient?: PatientWhereUniqueInput | null;
  typeField?: "Option1" | null;
};
