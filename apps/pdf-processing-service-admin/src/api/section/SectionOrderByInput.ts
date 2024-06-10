import { SortOrder } from "../../util/SortOrder";

export type SectionOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  pageId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
