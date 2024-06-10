import { FileInputWhereUniqueInput } from "../fileInput/FileInputWhereUniqueInput";
import { PageJsonDataUpdateManyWithoutPagesInput } from "./PageJsonDataUpdateManyWithoutPagesInput";
import { SectionUpdateManyWithoutPagesInput } from "./SectionUpdateManyWithoutPagesInput";

export type PageUpdateInput = {
  contentType?: "Option1" | null;
  fileInput?: FileInputWhereUniqueInput | null;
  pageJsonDataItems?: PageJsonDataUpdateManyWithoutPagesInput;
  pageNumber?: number | null;
  sections?: SectionUpdateManyWithoutPagesInput;
};
