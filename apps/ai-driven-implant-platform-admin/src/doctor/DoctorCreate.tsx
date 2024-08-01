import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PatientTitle } from "../patient/PatientTitle";

export const DoctorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="patients"
          reference="Patient"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PatientTitle} />
        </ReferenceArrayInput>
        <TextInput label="Specialization" source="specialization" />
      </SimpleForm>
    </Create>
  );
};
