import {
  LinkedinOutlined,
  MailOutlined,
  TwitterOutlined
} from "@ant-design/icons";
import { Button, Space, Switch } from "antd";
import { Footer } from "antd/es/layout/layout";
import { useState } from "react";
import { colors } from "../../../constants";
import { useThemeStore } from "../../store/themestore";

const SidebarFooter = () => {
  const theme = useThemeStore((state) => state.theme);
  const setDark = useThemeStore((state) => state.setDark);
  const setLight = useThemeStore((state) => state.setLight);
  const [checked, setChecked] = useState(theme === "light" ? false : true);

  const onChange = (checked) => {
    if (checked) {
      setDark();
      setChecked(true);
    } else {
      setLight();
      setChecked(false);
    }
  };

  return (
    <Footer
      style={{
        backgroundColor: theme === "dark" ? colors.darkMode : colors.lightMode,
        textAlign: "center",
      }}
    >
      <Space style={{ paddingBottom: "15px" }}>
        <span
          style={{
            paddingRight: "2%",
            color: theme === "dark" ? colors.lightMode : colors.darkMode,
          }}
        >
          Mode:
        </span>
        <Switch
          onChange={onChange}
          checkedChildren={"🌙"}
          unCheckedChildren={"☀️"}
          checked={checked}
        />
      </Space>
      <Space size={"large"} wrap={true}>
        <Button
          shape="circle"
          icon={<TwitterOutlined />}
          href="https://twitter.com/drawbridge_gg"
        />

        <Button
          shape="circle"
          icon={<LinkedinOutlined />}
          href="https://www.linkedin.com/company/drawbridge-data"
        />

        <Button
          shape="circle"
          icon={<MailOutlined />}
          href="mailto: hello@drawbridge.gg"
        />
      </Space>
    </Footer>
  );
};

export default SidebarFooter;
