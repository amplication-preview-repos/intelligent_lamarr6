import { ImplantWhereInput } from "./ImplantWhereInput";
import { ImplantOrderByInput } from "./ImplantOrderByInput";

export type ImplantFindManyArgs = {
  where?: ImplantWhereInput;
  orderBy?: Array<ImplantOrderByInput>;
  skip?: number;
  take?: number;
};
