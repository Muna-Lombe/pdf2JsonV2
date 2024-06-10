import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type PageJsonDataWhereInput = {
  data?: JsonFilter;
  id?: StringFilter;
  page?: PageWhereUniqueInput;
};
