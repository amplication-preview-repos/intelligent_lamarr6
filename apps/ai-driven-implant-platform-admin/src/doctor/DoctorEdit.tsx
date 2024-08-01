import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PatientTitle } from "../patient/PatientTitle";

export const DoctorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
