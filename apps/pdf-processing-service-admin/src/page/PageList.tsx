import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FILEINPUT_TITLE_FIELD } from "../fileInput/FileInputTitle";

export const PageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Pages"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
