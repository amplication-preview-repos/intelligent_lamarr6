import { SimulationWhereInput } from "./SimulationWhereInput";
import { SimulationOrderByInput } from "./SimulationOrderByInput";

export type SimulationFindManyArgs = {
  where?: SimulationWhereInput;
  orderBy?: Array<SimulationOrderByInput>;
  skip?: number;
  take?: number;
};
