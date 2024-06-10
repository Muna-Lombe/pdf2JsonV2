import { PageCreateNestedManyWithoutFileInputsInput } from "./PageCreateNestedManyWithoutFileInputsInput";

export type FileInputCreateInput = {
  filePath?: string | null;
  pages?: PageCreateNestedManyWithoutFileInputsInput;
  uploadDate?: Date | null;
};
