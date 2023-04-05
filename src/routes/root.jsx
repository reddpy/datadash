import { ConfigProvider, Grid, Layout, Spin } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet, useLocation } from "react-router-dom";
import { colors } from "../../constants";
import DDFooter from "../UI/ddfooter";
import DesktopMenu from "../UI/desktop/desktopmenu";
import MobileMenu from "../UI/mobile/mobilemenu";
import { useRouterActiveStore } from "../store/navigationstore";
import { useThemeStore } from "../store/themestore";

const Root = () => {
  const screens = Grid.useBreakpoint();
  const mobile = (screens?.xs || screens?.sm) && !screens?.md;
  const theme = useThemeStore((state) => state.theme);
  const location = useLocation();

  if (screens === undefined || screens == {} || mobile === undefined) {
    return <Spin size="large" />;
  }

  if (location.pathname === "/") {
    useRouterActiveStore.setState({ activeLink: "/" });
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary,
        },
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        {mobile ? <MobileMenu /> : <DesktopMenu />}
        <Layout>
          <Content
            style={{
              paddingLeft: !mobile ? 300 : 0,
              backgroundColor:
                theme === "dark" ? colors.darkMode : colors.lightMode,
              color: theme === "dark" ? "white" : "",
            }}
          >
            <Outlet />
          </Content>
          <DDFooter />
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default Root;
