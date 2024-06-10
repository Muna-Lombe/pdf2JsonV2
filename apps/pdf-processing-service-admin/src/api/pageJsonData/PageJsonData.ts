import { JsonValue } from "type-fest";
import { Page } from "../page/Page";

export type PageJsonData = {
  createdAt: Date;
  data: JsonValue;
  id: string;
  page?: Page | null;
  updatedAt: Date;
};
