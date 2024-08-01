import { PatientCreateNestedManyWithoutDoctorsInput } from "./PatientCreateNestedManyWithoutDoctorsInput";

export type DoctorCreateInput = {
  email?: string | null;
  name?: string | null;
  patients?: PatientCreateNestedManyWithoutDoctorsInput;
  specialization?: string | null;
};
