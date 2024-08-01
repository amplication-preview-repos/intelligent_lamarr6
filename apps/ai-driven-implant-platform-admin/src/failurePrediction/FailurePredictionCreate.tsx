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

export const FailurePredictionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="implant.id" reference="Implant" label="Implant">
          <SelectInput optionText={ImplantTitle} />
        </ReferenceInput>
        <ReferenceInput source="patient.id" reference="Patient" label="Patient">
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
        <TextInput label="Prediction" multiline source="prediction" />
      </SimpleForm>
    </Create>
  );
};
