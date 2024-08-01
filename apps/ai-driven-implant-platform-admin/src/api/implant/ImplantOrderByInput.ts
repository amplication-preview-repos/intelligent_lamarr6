import { SortOrder } from "../../util/SortOrder";

export type ImplantOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  manufacturer?: SortOrder;
  name?: SortOrder;
  specifications?: SortOrder;
  updatedAt?: SortOrder;
};
