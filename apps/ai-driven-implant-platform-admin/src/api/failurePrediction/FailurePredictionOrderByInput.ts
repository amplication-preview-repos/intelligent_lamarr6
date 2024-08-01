import { SortOrder } from "../../util/SortOrder";

export type FailurePredictionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  implantId?: SortOrder;
  patientId?: SortOrder;
  prediction?: SortOrder;
  updatedAt?: SortOrder;
};
