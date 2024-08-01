import { Implant as TImplant } from "../api/implant/Implant";

export const IMPLANT_TITLE_FIELD = "name";

export const ImplantTitle = (record: TImplant): string => {
  return record.name?.toString() || String(record.id);
};
