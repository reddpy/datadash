import { Space } from "antd";
import { NavLink } from "react-router-dom";
import { colors } from "../../../constants";
import LightLogo from "../../assets/drawbridgeblue.png";
import DarkLogo from "../../assets/drawbridgewhite.png";
import { useRouterActiveStore } from "../../store/navigationstore";
import { useThemeStore } from "../../store/themestore";

const SidebarLogo = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <NavLink
      to="/"
      onClick={() => {
        useRouterActiveStore.setState({ activeLink: "/" });
      }}
    >
      <Space
        style={{
          backgroundColor:
            theme === "dark" ? colors.darkMode : colors.lightMode,
          padding: "15px 35px",
        }}
      >
        <img width={200} src={theme === "dark" ? DarkLogo : LightLogo} />
      </Space>
    </NavLink>
  );
};

export default SidebarLogo;
