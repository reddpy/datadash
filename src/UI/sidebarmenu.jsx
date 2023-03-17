import {
  BankOutlined,
  BuildOutlined,
  TwitterCircleFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import { Menu, Button } from "antd";
import { Footer } from "antd/es/layout/layout";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { colors } from "../../constants";
import logo from "../assets/Logo.png";

const headerFooterStyle = {
  color: "#fff",
  backgroundColor: "white",
};

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

const SideBarMenu = () => {
  const [key, setKey] = useState("/");
  const navigate = useNavigate();

  const onNavigate = (e) => {
    setKey(e.key);
    navigate(e.key);
  };

  return (
    <>
      <NavLink
        to="/"
        onClick={() => {
          setKey();
        }}
      >
        <div style={headerFooterStyle}>
          <img width={200} src={logo} />
        </div>
      </NavLink>
      <Menu
        style={{ minHeight: "82%" }}
        onClick={onNavigate}
        defaultOpenKeys={["founder_activity", "vc_activity"]}
        mode="inline"
        items={items}
        selectedKeys={key}
      />
      <Footer style={{ backgroundColor: "white", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <p>
            <a href="https://twitter.com/drawbridge_gg">
              <Button
                type="primary"
                shape="circle"
                icon={<TwitterCircleFilled />}
              />
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/company/drawbridge-data">
              <Button type="primary" shape="circle" icon={<LinkedinFilled />} />
            </a>
          </p>
        </div>
      </Footer>
    </>
  );
};

export default SideBarMenu;
