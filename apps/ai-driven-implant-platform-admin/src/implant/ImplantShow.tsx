import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { IMPLANT_TITLE_FIELD } from "./ImplantTitle";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";

export const ImplantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Manufacturer" source="manufacturer" />
        <TextField label="Name" source="name" />
        <TextField label="Specifications" source="specifications" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="FailurePrediction"
          target="implantId"
          label="FailurePredictions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Implant"
              source="implant.id"
              reference="Implant"
            >
              <TextField source={IMPLANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Patient"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Prediction" source="prediction" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Recommendation"
          target="implantId"
          label="Recommendations"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Implant"
              source="implant.id"
              reference="Implant"
            >
              <TextField source={IMPLANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Patient"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Reason" source="reason" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Simulation"
          target="implantId"
          label="Simulations"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Implant"
              source="implant.id"
              reference="Implant"
            >
              <TextField source={IMPLANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Notes" source="notes" />
            <ReferenceField
              label="Patient"
              source="patient.id"
              reference="Patient"
            >
              <TextField source={PATIENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
