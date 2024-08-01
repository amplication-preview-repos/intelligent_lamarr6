import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { FailurePredictionTitle } from "../failurePrediction/FailurePredictionTitle";
import { RecommendationTitle } from "../recommendation/RecommendationTitle";
import { SimulationTitle } from "../simulation/SimulationTitle";

export const ImplantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="failurePredictions"
          reference="FailurePrediction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FailurePredictionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Manufacturer" source="manufacturer" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="recommendations"
          reference="Recommendation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecommendationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="simulations"
          reference="Simulation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SimulationTitle} />
        </ReferenceArrayInput>
        <TextInput label="Specifications" multiline source="specifications" />
      </SimpleForm>
    </Create>
  );
};
