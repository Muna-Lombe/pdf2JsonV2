import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { PageTitle } from "../page/PageTitle";

export const FileInputCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="filePath" source="filePath" />
        <ReferenceArrayInput
          source="pages"
          reference="Page"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PageTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="uploadDate" source="uploadDate" />
      </SimpleForm>
    </Create>
  );
};
