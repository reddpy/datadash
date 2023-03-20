import { Grid } from "antd";
import { Footer } from "antd/es/layout/layout";
import { useThemeStore } from "../store/themestore";
import { colors } from "../../constants";

const DDFooter = () => {
  const screens = Grid.useBreakpoint();
  const mobile = (screens?.xs || screens?.sm) && !screens?.md;

  const style = {
    textAlign: "center",
    paddingLeft: !mobile ? 300 : "",
  };

  return (
    <Footer style={style}>Dashboards ©2023 Created by Drawbridge Data</Footer>
  );
};

export default DDFooter;
