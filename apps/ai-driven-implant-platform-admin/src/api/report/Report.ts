import { JsonValue } from "type-fest";
import { Patient } from "../patient/Patient";

export type Report = {
  createdAt: Date;
  file: JsonValue;
  id: string;
  patient?: Patient | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
