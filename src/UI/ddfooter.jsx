import { Grid } from "antd";
import { Footer } from "antd/es/layout/layout";


const DDFooter = () => {
  const screens = Grid.useBreakpoint();
  const mobile = (screens?.xs || screens?.sm)  && !screens?.md;

  const style= {
    textAlign: 'center',
    marginLeft: !mobile? 300: ''
  }

  return (
    <Footer style={style}>
      Dashboards ©2023 Created by Drawbridge Data
    </Footer>
  );
};

export default DDFooter;
