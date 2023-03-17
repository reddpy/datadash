import { Layout, ConfigProvider } from "antd";

import { Outlet } from "react-router-dom";
import SideBarMenu from "../UI/sidebarmenu";
const { Content, Sider, Footer } = Layout;
import { colors } from "../../constants";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import { Header } from "antd/es/layout/layout";

const headerStyle = {
  color: "#fff",
  backgroundColor: "white",
};

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
            // overflow: "auto",
          }}
        >
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
