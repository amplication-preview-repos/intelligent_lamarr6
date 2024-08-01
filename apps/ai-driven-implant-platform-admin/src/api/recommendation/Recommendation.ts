import { Implant } from "../implant/Implant";
import { Patient } from "../patient/Patient";

export type Recommendation = {
  createdAt: Date;
  id: string;
  implant?: Implant | null;
  patient?: Patient | null;
  reason: string | null;
  updatedAt: Date;
};
