import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="company" source="company.id" reference="Company">
          <TextField source={COMPANY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_company" source="userCompany" />
        <TextField label="user_password" source="userPassword" />
        <TextField label="user_username" source="userUsername" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Backup" target="userId" label="Backups">
          <Datagrid rowClick="show">
            <TextField label="backup_data" source="backupData" />
            <TextField label="backup_user" source="backupUser" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="data" source="data" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Session"
          target="userId"
          label="Sessions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="expiresAt" source="expiresAt" />
            <TextField label="ID" source="id" />
            <TextField label="session_createdAt" source="sessionCreatedAt" />
            <TextField label="session_expiresAt" source="sessionExpiresAt" />
            <TextField label="session_token" source="sessionToken" />
            <TextField label="session_user" source="sessionUser" />
            <TextField label="token" source="token" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
