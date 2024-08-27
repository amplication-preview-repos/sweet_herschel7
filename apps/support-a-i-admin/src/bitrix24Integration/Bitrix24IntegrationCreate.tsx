import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const Bitrix24IntegrationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="apiEndpoint" source="apiEndpoint" />
        <TextInput label="authorizationKey" source="authorizationKey" />
        <TextInput label="integrationName" source="integrationName" />
      </SimpleForm>
    </Create>
  );
};
