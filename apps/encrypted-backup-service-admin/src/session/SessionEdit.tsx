import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const SessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="expiresAt" source="expiresAt" />
        <DateTimeInput label="session_createdAt" source="sessionCreatedAt" />
        <DateTimeInput label="session_expiresAt" source="sessionExpiresAt" />
        <TextInput label="session_token" source="sessionToken" />
        <TextInput label="session_user" source="sessionUser" />
        <TextInput label="token" source="token" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
