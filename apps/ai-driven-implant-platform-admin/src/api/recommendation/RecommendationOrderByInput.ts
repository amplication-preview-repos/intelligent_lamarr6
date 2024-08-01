import { SortOrder } from "../../util/SortOrder";

export type RecommendationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  implantId?: SortOrder;
  patientId?: SortOrder;
  reason?: SortOrder;
  updatedAt?: SortOrder;
};
