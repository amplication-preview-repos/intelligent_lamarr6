import { Simulation as TSimulation } from "../api/simulation/Simulation";

export const SIMULATION_TITLE_FIELD = "id";

export const SimulationTitle = (record: TSimulation): string => {
  return record.id?.toString() || String(record.id);
};
