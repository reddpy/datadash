import { Footer } from "antd/es/layout/layout";
import {
  LinkedinOutlined,
  TwitterOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { Space } from "antd";

const SidebarFooter = () => {
  return (
    <Footer style={{ backgroundColor: "white" }}>
      <Space size={"large"}>
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