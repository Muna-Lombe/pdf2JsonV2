import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SectionList } from "./section/SectionList";
import { SectionCreate } from "./section/SectionCreate";
import { SectionEdit } from "./section/SectionEdit";
import { SectionShow } from "./section/SectionShow";
import { PageJsonDataList } from "./pageJsonData/PageJsonDataList";
import { PageJsonDataCreate } from "./pageJsonData/PageJsonDataCreate";
import { PageJsonDataEdit } from "./pageJsonData/PageJsonDataEdit";
import { PageJsonDataShow } from "./pageJsonData/PageJsonDataShow";
import { PageList } from "./page/PageList";
import { PageCreate } from "./page/PageCreate";
import { PageEdit } from "./page/PageEdit";
import { PageShow } from "./page/PageShow";
import { FileInputList } from "./fileInput/FileInputList";
import { FileInputCreate } from "./fileInput/FileInputCreate";
import { FileInputEdit } from "./fileInput/FileInputEdit";
import { FileInputShow } from "./fileInput/FileInputShow";
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
        title={"PDFProcessingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Section"
          list={SectionList}
          edit={SectionEdit}
          create={SectionCreate}
          show={SectionShow}
        />
        <Resource
          name="PageJsonData"
          list={PageJsonDataList}
          edit={PageJsonDataEdit}
          create={PageJsonDataCreate}
          show={PageJsonDataShow}
        />
        <Resource
          name="Page"
          list={PageList}
          edit={PageEdit}
          create={PageCreate}
          show={PageShow}
        />
        <Resource
          name="FileInput"
          list={FileInputList}
          edit={FileInputEdit}
          create={FileInputCreate}
          show={FileInputShow}
        />
      </Admin>
    </div>
  );
};

export default App;
