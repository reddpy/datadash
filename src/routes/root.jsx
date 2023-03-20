import { ConfigProvider, Grid, Layout, Spin } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { colors } from "../../constants";
import { useThemeStore } from "../store/themestore";
import DDFooter from "../UI/ddfooter";
import DesktopMenu from "../UI/desktop/desktopmenu";
import MobileMenu from "../UI/mobile/mobilemenu";

const Root = () => {
  const screens = Grid.useBreakpoint();
  const mobile = (screens?.xs || screens?.sm) && !screens?.md;
  const theme = useThemeStore((state) => state.theme);

  if (screens === undefined || screens == {} || mobile === undefined) {
    return <Spin size="large" />;
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
          <Content style={{ paddingLeft: !mobile ? 300 : 0 }}>
            <Outlet />
          </Content>
          <DDFooter />
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default Root;
