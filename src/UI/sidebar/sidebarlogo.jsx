import { NavLink } from "react-router-dom";
import LargeLogo from "../../assets/Logo.png"

const headerFooterStyle = {
    color: "#fff",
    backgroundColor: "white",
  };  

const SidebarLogo = () => {
  return (
    <NavLink
      to="/"
      onClick={() => {
        
      }}
    >
      <div style={headerFooterStyle}>
        <img width={200} src={LargeLogo} />
      </div>
    </NavLink>
  );
};

export default SidebarLogo;
