import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TelegramMessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="messageText" multiline source="messageText" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
