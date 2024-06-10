import { Page } from "../page/Page";

export type FileInput = {
  createdAt: Date;
  filePath: string | null;
  id: string;
  pages?: Array<Page>;
  updatedAt: Date;
  uploadDate: Date | null;
};
