import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const Bitrix24IntegrationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="apiEndpoint" source="apiEndpoint" />
        <TextInput label="authorizationKey" source="authorizationKey" />
        <TextInput label="integrationName" source="integrationName" />
      </SimpleForm>
    </Edit>
  );
};
