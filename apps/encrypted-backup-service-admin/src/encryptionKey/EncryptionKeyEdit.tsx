import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const EncryptionKeyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="key" source="key" />
      </SimpleForm>
    </Edit>
  );
};
