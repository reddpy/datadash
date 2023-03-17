import { Layout ,ConfigProvider } from "antd";

import { Outlet } from "react-router-dom";
import SideBarMenu from "../UI/sidebarmenu";
const { Content, Sider, Footer } = Layout;
import {colors} from "../../constants";

const Root = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary,
        },
      }}
    >
      <Layout style={{ minHeight: "98vh" }}>
        <Sider width={275}>
          <SideBarMenu />
        </Sider>
        <Layout>
          <Content style={{ paddingLeft: "2%" }}>
            <Outlet />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Dashboards ©2023 Created by Drawbridge Data
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default Root;
