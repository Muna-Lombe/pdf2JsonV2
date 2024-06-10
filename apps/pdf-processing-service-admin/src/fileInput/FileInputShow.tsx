import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FILEINPUT_TITLE_FIELD } from "./FileInputTitle";

export const FileInputShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="filePath" source="filePath" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uploadDate" source="uploadDate" />
        <ReferenceManyField reference="Page" target="fileInputId" label="Pages">
          <Datagrid rowClick="show">
            <TextField label="contentType" source="contentType" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="fileInput"
              source="fileinput.id"
              reference="FileInput"
            >
              <TextField source={FILEINPUT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="pageNumber" source="pageNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
