import { FileInput } from "../fileInput/FileInput";
import { PageJsonData } from "../pageJsonData/PageJsonData";
import { Section } from "../section/Section";

export type Page = {
  contentType?: "Option1" | null;
  createdAt: Date;
  fileInput?: FileInput | null;
  id: string;
  pageJsonDataItems?: Array<PageJsonData>;
  pageNumber: number | null;
  sections?: Array<Section>;
  updatedAt: Date;
};
