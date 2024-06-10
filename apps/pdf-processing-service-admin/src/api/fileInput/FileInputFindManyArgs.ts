import { FileInputWhereInput } from "./FileInputWhereInput";
import { FileInputOrderByInput } from "./FileInputOrderByInput";

export type FileInputFindManyArgs = {
  where?: FileInputWhereInput;
  orderBy?: Array<FileInputOrderByInput>;
  skip?: number;
  take?: number;
};
