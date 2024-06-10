import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type SectionWhereInput = {
  content?: JsonFilter;
  id?: StringFilter;
  page?: PageWhereUniqueInput;
  typeField?: "Option1";
};
