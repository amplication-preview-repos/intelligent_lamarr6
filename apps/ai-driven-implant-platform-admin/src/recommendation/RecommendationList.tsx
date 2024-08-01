import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { IMPLANT_TITLE_FIELD } from "../implant/ImplantTitle";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";

export const RecommendationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Recommendations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Implant" source="implant.id" reference="Implant">
          <TextField source={IMPLANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Patient" source="patient.id" reference="Patient">
          <TextField source={PATIENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Reason" source="reason" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
