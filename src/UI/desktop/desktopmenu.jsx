import Sider from "antd/es/layout/Sider";
import SidebarFooter from "../menu_components/sidebarfooter";
import SidebarLinks from "../menu_components/sidebarlinks";
import SidebarLogo from "../menu_components/sidebarlogo";
import { useThemeStore } from "../../store/themestore";
import { colors } from "../../../constants";

const DesktopMenu = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <>
      <Sider
        width={275}
        style={{
          backgroundColor:
            theme === "dark" ? colors.darkMode : colors.lightMode,
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <SidebarLogo />
        <SidebarLinks />
        <SidebarFooter />
      </Sider>
    </>
  );
};

export default DesktopMenu;
