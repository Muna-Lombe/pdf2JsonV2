import { SortOrder } from "../../util/SortOrder";

export type PageOrderByInput = {
  contentType?: SortOrder;
  createdAt?: SortOrder;
  fileInputId?: SortOrder;
  id?: SortOrder;
  pageNumber?: SortOrder;
  updatedAt?: SortOrder;
};
