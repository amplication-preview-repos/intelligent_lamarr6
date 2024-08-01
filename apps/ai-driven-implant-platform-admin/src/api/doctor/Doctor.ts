import { Patient } from "../patient/Patient";

export type Doctor = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  patients?: Array<Patient>;
  specialization: string | null;
  updatedAt: Date;
};
