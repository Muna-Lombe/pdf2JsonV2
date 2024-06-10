import { JsonValue } from "type-fest";
import { Page } from "../page/Page";

export type Section = {
  content: JsonValue;
  createdAt: Date;
  id: string;
  page?: Page | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
