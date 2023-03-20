import { BankOutlined, BuildOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useRouterActiveStore } from "../../store/navigationstore";
import { useThemeStore } from "../../store/themestore";
import { colors } from "../../../constants";

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

const SidebarLinks = () => {
  const navigate = useNavigate();
  const activeLink = useRouterActiveStore((state) => state.activeLink);
  const theme = useThemeStore((state) => state.theme);

  const onNavigate = (e) => {
    useRouterActiveStore.setState({ activeLink: e.key });
    navigate(e.key);
  };

  return (
    <>
      <Menu
        onClick={onNavigate}
        defaultOpenKeys={["founder_activity", "vc_activity"]}
        mode="inline"
        items={items}
        selectedKeys={activeLink === "/" ? "" : activeLink}
        theme={theme === "dark" ? "dark" : "light"}
        style={{
          backgroundColor:
            theme === "dark" ? colors.darkMode : colors.lightMode,
        }}
      />
    </>
  );
};

export default SidebarLinks;
