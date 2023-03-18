import {
  BankOutlined,
  BuildOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Founder Activity", "founder_activity", <BuildOutlined />, [
    getItem("Stealth Founders", "fna/stealthfounder"),
    getItem("Corporate Data", "fna/corporatedata"),
    getItem("Locations", "fna/locations"),
  ]),

  getItem("VC Activity", "vc_activity", <BankOutlined />, [
    getItem("Investments", "vca/investments"),
    getItem("Investor Profiles", "vca/investorprofiles"),
  ]),
];

const SidebarLinks = (props) => {
  const [key, setKey] = useState("/");
  const navigate = useNavigate();

  const onNavigate = (e) => {
    setKey(e.key);
    navigate(e.key);
  };

  return (
    <>
      <Menu
        onClick={onNavigate}
        defaultOpenKeys={["founder_activity", "vc_activity"]}
        mode="inline"
        items={items}
        selectedKeys={key}
      />
    </>
  );
};

export default SidebarLinks;
