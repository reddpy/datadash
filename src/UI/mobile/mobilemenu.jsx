import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import { colors } from "../../../constants";
import { useThemeStore } from "../../store/themestore";
import SidebarFooter from "../menu_components/sidebarfooter";
import SidebarLinks from "../menu_components/sidebarlinks";
import SidebarLogo from "../menu_components/sidebarlogo";

const MobileMenu = () => {
  const theme = useThemeStore((state) => state.theme);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");

  const headerStyle = {
    position: "sticky",
    top: 0,
    zIndex: 1,
    textAlign: "start",
    backgroundColor: theme === "dark" ? colors.darkMode : colors.lightMode,
    width: "100%",
    paddingLeft: "15px",
    paddingRight: "15px",
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header style={headerStyle}>
        <Space size={275}>
          <Button
            type="primary"
            shape="circle"
            size="large"
            onClick={showDrawer}
            icon={<MenuUnfoldOutlined />}
          ></Button>
        </Space>
      </Header>
      <Drawer
        title={<SidebarLogo />}
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        width={275}
        bodyStyle={{
          padding: 0,
          backgroundColor:
            theme === "dark" ? colors.darkMode : colors.lightMode,
        }}
        headerStyle={{
          padding: 0,
          backgroundColor:
            theme === "dark" ? colors.darkMode : colors.lightMode,
        }}
      >
        <SidebarLinks />
        <SidebarFooter />
      </Drawer>
    </>
  );
};

export default MobileMenu;
