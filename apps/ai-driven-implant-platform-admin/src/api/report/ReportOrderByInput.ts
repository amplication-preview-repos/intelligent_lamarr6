import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  createdAt?: SortOrder;
  file?: SortOrder;
  id?: SortOrder;
  patientId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
