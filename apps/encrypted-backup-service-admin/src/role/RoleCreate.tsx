import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CompanyTitle } from "../company/CompanyTitle";

export const RoleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <TextInput label="role_company" source="roleCompany" />
        <TextInput label="role_name" source="roleName" />
        <TextInput label="role_user" source="roleUser" />
      </SimpleForm>
    </Create>
  );
};
