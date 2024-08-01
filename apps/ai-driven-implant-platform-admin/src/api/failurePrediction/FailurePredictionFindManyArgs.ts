import { FailurePredictionWhereInput } from "./FailurePredictionWhereInput";
import { FailurePredictionOrderByInput } from "./FailurePredictionOrderByInput";

export type FailurePredictionFindManyArgs = {
  where?: FailurePredictionWhereInput;
  orderBy?: Array<FailurePredictionOrderByInput>;
  skip?: number;
  take?: number;
};
