import { BankOutlined, BuildOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";

const headerStyle = {
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
  const navigate = useNavigate();
  const onNavigate = (e) => {
    navigate(e.key);
  };
  return (
    <>
      <NavLink to="/">
          <div style={headerStyle}>
            <img width={200} src={logo} />
          </div>
        </NavLink>
      <Menu
        style={{ minHeight: '95%' }}
        onClick={onNavigate}
        defaultOpenKeys={["founder_activity", "vc_activity"]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default SideBarMenu;
