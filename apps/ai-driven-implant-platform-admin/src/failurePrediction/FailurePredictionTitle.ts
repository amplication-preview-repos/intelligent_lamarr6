import { FailurePrediction as TFailurePrediction } from "../api/failurePrediction/FailurePrediction";

export const FAILUREPREDICTION_TITLE_FIELD = "id";

export const FailurePredictionTitle = (record: TFailurePrediction): string => {
  return record.id?.toString() || String(record.id);
};
