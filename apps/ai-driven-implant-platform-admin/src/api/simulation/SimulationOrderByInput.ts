import { SortOrder } from "../../util/SortOrder";

export type SimulationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  implantId?: SortOrder;
  notes?: SortOrder;
  patientId?: SortOrder;
  updatedAt?: SortOrder;
};
