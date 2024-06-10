import { FileInputWhereUniqueInput } from "../fileInput/FileInputWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PageJsonDataListRelationFilter } from "../pageJsonData/PageJsonDataListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SectionListRelationFilter } from "../section/SectionListRelationFilter";

export type PageWhereInput = {
  contentType?: "Option1";
  fileInput?: FileInputWhereUniqueInput;
  id?: StringFilter;
  pageJsonDataItems?: PageJsonDataListRelationFilter;
  pageNumber?: IntNullableFilter;
  sections?: SectionListRelationFilter;
};
