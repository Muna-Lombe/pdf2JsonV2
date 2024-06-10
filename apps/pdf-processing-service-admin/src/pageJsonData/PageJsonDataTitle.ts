import { PageJsonData as TPageJsonData } from "../api/pageJsonData/PageJsonData";

export const PAGEJSONDATA_TITLE_FIELD = "id";

export const PageJsonDataTitle = (record: TPageJsonData): string => {
  return record.id?.toString() || String(record.id);
};
