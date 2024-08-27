import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TelegramMessageList } from "./telegramMessage/TelegramMessageList";
import { TelegramMessageCreate } from "./telegramMessage/TelegramMessageCreate";
import { TelegramMessageEdit } from "./telegramMessage/TelegramMessageEdit";
import { TelegramMessageShow } from "./telegramMessage/TelegramMessageShow";
import { ChatGptResponseList } from "./chatGptResponse/ChatGptResponseList";
import { ChatGptResponseCreate } from "./chatGptResponse/ChatGptResponseCreate";
import { ChatGptResponseEdit } from "./chatGptResponse/ChatGptResponseEdit";
import { ChatGptResponseShow } from "./chatGptResponse/ChatGptResponseShow";
import { Bitrix24IntegrationList } from "./bitrix24Integration/Bitrix24IntegrationList";
import { Bitrix24IntegrationCreate } from "./bitrix24Integration/Bitrix24IntegrationCreate";
import { Bitrix24IntegrationEdit } from "./bitrix24Integration/Bitrix24IntegrationEdit";
import { Bitrix24IntegrationShow } from "./bitrix24Integration/Bitrix24IntegrationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Support A.I."}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TelegramMessage"
          list={TelegramMessageList}
          edit={TelegramMessageEdit}
          create={TelegramMessageCreate}
          show={TelegramMessageShow}
        />
        <Resource
          name="ChatGptResponse"
          list={ChatGptResponseList}
          edit={ChatGptResponseEdit}
          create={ChatGptResponseCreate}
          show={ChatGptResponseShow}
        />
        <Resource
          name="Bitrix24Integration"
          list={Bitrix24IntegrationList}
          edit={Bitrix24IntegrationEdit}
          create={Bitrix24IntegrationCreate}
          show={Bitrix24IntegrationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
