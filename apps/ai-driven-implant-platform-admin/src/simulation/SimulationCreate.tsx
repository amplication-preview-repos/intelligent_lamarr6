import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ImplantTitle } from "../implant/ImplantTitle";
import { PatientTitle } from "../patient/PatientTitle";

export const SimulationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="implant.id" reference="Implant" label="Implant">
          <SelectInput optionText={ImplantTitle} />
        </ReferenceInput>
        <TextInput label="Notes" multiline source="notes" />
        <ReferenceInput source="patient.id" reference="Patient" label="Patient">
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
