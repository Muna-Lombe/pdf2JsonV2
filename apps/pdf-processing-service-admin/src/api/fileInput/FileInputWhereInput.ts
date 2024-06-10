import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PageListRelationFilter } from "../page/PageListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type FileInputWhereInput = {
  filePath?: StringNullableFilter;
  id?: StringFilter;
  pages?: PageListRelationFilter;
  uploadDate?: DateTimeNullableFilter;
};
