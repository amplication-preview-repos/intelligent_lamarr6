import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DoctorList } from "./doctor/DoctorList";
import { DoctorCreate } from "./doctor/DoctorCreate";
import { DoctorEdit } from "./doctor/DoctorEdit";
import { DoctorShow } from "./doctor/DoctorShow";
import { PatientList } from "./patient/PatientList";
import { PatientCreate } from "./patient/PatientCreate";
import { PatientEdit } from "./patient/PatientEdit";
import { PatientShow } from "./patient/PatientShow";
import { FailurePredictionList } from "./failurePrediction/FailurePredictionList";
import { FailurePredictionCreate } from "./failurePrediction/FailurePredictionCreate";
import { FailurePredictionEdit } from "./failurePrediction/FailurePredictionEdit";
import { FailurePredictionShow } from "./failurePrediction/FailurePredictionShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { SimulationList } from "./simulation/SimulationList";
import { SimulationCreate } from "./simulation/SimulationCreate";
import { SimulationEdit } from "./simulation/SimulationEdit";
import { SimulationShow } from "./simulation/SimulationShow";
import { RecommendationList } from "./recommendation/RecommendationList";
import { RecommendationCreate } from "./recommendation/RecommendationCreate";
import { RecommendationEdit } from "./recommendation/RecommendationEdit";
import { RecommendationShow } from "./recommendation/RecommendationShow";
import { ImplantList } from "./implant/ImplantList";
import { ImplantCreate } from "./implant/ImplantCreate";
import { ImplantEdit } from "./implant/ImplantEdit";
import { ImplantShow } from "./implant/ImplantShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AI-Driven Implant Platform"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Doctor"
          list={DoctorList}
          edit={DoctorEdit}
          create={DoctorCreate}
          show={DoctorShow}
        />
        <Resource
          name="Patient"
          list={PatientList}
          edit={PatientEdit}
          create={PatientCreate}
          show={PatientShow}
        />
        <Resource
          name="FailurePrediction"
          list={FailurePredictionList}
          edit={FailurePredictionEdit}
          create={FailurePredictionCreate}
          show={FailurePredictionShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="Simulation"
          list={SimulationList}
          edit={SimulationEdit}
          create={SimulationCreate}
          show={SimulationShow}
        />
        <Resource
          name="Recommendation"
          list={RecommendationList}
          edit={RecommendationEdit}
          create={RecommendationCreate}
          show={RecommendationShow}
        />
        <Resource
          name="Implant"
          list={ImplantList}
          edit={ImplantEdit}
          create={ImplantCreate}
          show={ImplantShow}
        />
      </Admin>
    </div>
  );
};

export default App;
