import { Implant } from "../implant/Implant";
import { Patient } from "../patient/Patient";

export type Simulation = {
  createdAt: Date;
  id: string;
  implant?: Implant | null;
  notes: string | null;
  patient?: Patient | null;
  updatedAt: Date;
};
