import { InputJsonValue } from "../../types";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type PageJsonDataUpdateInput = {
  data?: InputJsonValue;
  page?: PageWhereUniqueInput | null;
};
