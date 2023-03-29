import { Grid } from "antd";
import { Footer } from "antd/es/layout/layout";
import { useThemeStore } from "../store/themestore";

const DDFooter = () => {
  const screens = Grid.useBreakpoint();
  const mobile = (screens?.xs || screens?.sm) && !screens?.md;
  const theme = useThemeStore((state) => state.theme);

  const style = {
    textAlign: "center",
    paddingLeft: !mobile ? 350 : "",
    color: theme === "dark" ? "white" : "",
  };

  return <Footer style={style}>Data ©2023 Created by Drawbridge Data</Footer>;
};

export default DDFooter;
