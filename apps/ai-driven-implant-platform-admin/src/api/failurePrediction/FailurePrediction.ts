import { Implant } from "../implant/Implant";
import { Patient } from "../patient/Patient";

export type FailurePrediction = {
  createdAt: Date;
  id: string;
  implant?: Implant | null;
  patient?: Patient | null;
  prediction: string | null;
  updatedAt: Date;
};
