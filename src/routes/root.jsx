import { ConfigProvider, Layout, Space } from "antd";

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
        <Sider
          width={275}
          style={{
            backgroundColor: "white",
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <SidebarLogo />
          <div>
            <SidebarLinks />
            <SidebarFooter />
          </div>
        </Sider>
        <Layout style={{ marginLeft: 300 }}>
          <Content>
            <Outlet />
          </Content>
          <Footer textAlign='center' style={{ textAlign: "center" }}>
            Dashboards ©2023 Created by Drawbridge Data
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default Root;
