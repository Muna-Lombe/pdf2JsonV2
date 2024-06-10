import { InputJsonValue } from "../../types";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type PageJsonDataCreateInput = {
  data?: InputJsonValue;
  page?: PageWhereUniqueInput | null;
};
