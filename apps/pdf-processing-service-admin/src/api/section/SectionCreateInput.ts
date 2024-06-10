import { InputJsonValue } from "../../types";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type SectionCreateInput = {
  content?: InputJsonValue;
  page?: PageWhereUniqueInput | null;
  typeField?: "Option1" | null;
};
