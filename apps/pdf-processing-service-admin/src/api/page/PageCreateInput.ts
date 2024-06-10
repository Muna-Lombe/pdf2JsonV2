import { FileInputWhereUniqueInput } from "../fileInput/FileInputWhereUniqueInput";
import { PageJsonDataCreateNestedManyWithoutPagesInput } from "./PageJsonDataCreateNestedManyWithoutPagesInput";
import { SectionCreateNestedManyWithoutPagesInput } from "./SectionCreateNestedManyWithoutPagesInput";

export type PageCreateInput = {
  contentType?: "Option1" | null;
  fileInput?: FileInputWhereUniqueInput | null;
  pageJsonDataItems?: PageJsonDataCreateNestedManyWithoutPagesInput;
  pageNumber?: number | null;
  sections?: SectionCreateNestedManyWithoutPagesInput;
};
