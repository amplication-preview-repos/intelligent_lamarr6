import { Doctor } from "../doctor/Doctor";
import { FailurePrediction } from "../failurePrediction/FailurePrediction";
import { Recommendation } from "../recommendation/Recommendation";
import { Report } from "../report/Report";
import { Simulation } from "../simulation/Simulation";

export type Patient = {
  age: number | null;
  createdAt: Date;
  doctor?: Doctor | null;
  failurePredictions?: Array<FailurePrediction>;
  gender?: "Option1" | null;
  id: string;
  name: string | null;
  recommendations?: Array<Recommendation>;
  reports?: Array<Report>;
  simulations?: Array<Simulation>;
  updatedAt: Date;
};
