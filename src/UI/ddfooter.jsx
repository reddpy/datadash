import { Grid } from "antd";
import { Footer } from "antd/es/layout/layout";
import { colors } from "../../constants";
import { useThemeStore } from "../store/themestore";

const DDFooter = () => {
  const screens = Grid.useBreakpoint();
  const mobile = (screens?.xs || screens?.sm) && !screens?.md;
  const theme = useThemeStore((state) => state.theme);

  const style = {
    textAlign: "center",
    paddingLeft: !mobile ? 300 : "",
    color: theme === "dark" ? "white" : "",
    backgroundColor: theme === "dark" ? colors.darkMode : colors.lightMode,
  };

  return <Footer style={style}>Data ©2023 Created by Drawbridge Data</Footer>;
};

export default DDFooter;
