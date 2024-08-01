import { PatientUpdateManyWithoutDoctorsInput } from "./PatientUpdateManyWithoutDoctorsInput";

export type DoctorUpdateInput = {
  email?: string | null;
  name?: string | null;
  patients?: PatientUpdateManyWithoutDoctorsInput;
  specialization?: string | null;
};
