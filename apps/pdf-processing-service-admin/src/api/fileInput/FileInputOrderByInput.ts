import { SortOrder } from "../../util/SortOrder";

export type FileInputOrderByInput = {
  createdAt?: SortOrder;
  filePath?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  uploadDate?: SortOrder;
};
