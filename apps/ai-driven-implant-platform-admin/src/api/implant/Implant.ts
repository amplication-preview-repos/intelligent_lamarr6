import { FailurePrediction } from "../failurePrediction/FailurePrediction";
import { Recommendation } from "../recommendation/Recommendation";
import { Simulation } from "../simulation/Simulation";

export type Implant = {
  createdAt: Date;
  failurePredictions?: Array<FailurePrediction>;
  id: string;
  manufacturer: string | null;
  name: string | null;
  recommendations?: Array<Recommendation>;
  simulations?: Array<Simulation>;
  specifications: string | null;
  updatedAt: Date;
};
