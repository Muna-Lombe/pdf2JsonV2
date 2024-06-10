import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { FileInputTitle } from "../fileInput/FileInputTitle";
import { PageJsonDataTitle } from "../pageJsonData/PageJsonDataTitle";
import { SectionTitle } from "../section/SectionTitle";

export const PageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="contentType"
          label="contentType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="fileInput.id"
          reference="FileInput"
          label="fileInput"
        >
          <SelectInput optionText={FileInputTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="pageJsonDataItems"
          reference="PageJsonData"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PageJsonDataTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="pageNumber" source="pageNumber" />
        <ReferenceArrayInput
          source="sections"
          reference="Section"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SectionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
