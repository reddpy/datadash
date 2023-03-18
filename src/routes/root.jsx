import { ConfigProvider, Layout } from "antd";

import { Outlet } from "react-router-dom";
import { colors } from "../../constants";
import SidebarLinks from "../UI/sidebar/sidebarlinks";
import SidebarLogo from "../UI/sidebar/sidebarlogo";
import SidebarFooter from "../UI/sidebar/sidebarfooter";
const { Content, Sider, Footer } = Layout;

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
          <SidebarLogo />
          <SidebarLinks />
          <SidebarFooter />
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
