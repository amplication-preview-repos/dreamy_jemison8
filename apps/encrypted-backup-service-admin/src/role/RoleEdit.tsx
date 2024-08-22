import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CompanyTitle } from "../company/CompanyTitle";

export const RoleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <TextInput label="role_company" source="roleCompany" />
        <TextInput label="role_name" source="roleName" />
        <TextInput label="role_user" source="roleUser" />
      </SimpleForm>
    </Edit>
  );
};
