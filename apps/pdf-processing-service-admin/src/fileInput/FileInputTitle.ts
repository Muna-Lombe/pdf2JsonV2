import { FileInput as TFileInput } from "../api/fileInput/FileInput";

export const FILEINPUT_TITLE_FIELD = "filePath";

export const FileInputTitle = (record: TFileInput): string => {
  return record.filePath?.toString() || String(record.id);
};
