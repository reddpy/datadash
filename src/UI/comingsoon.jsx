import { Col, Grid, Row, Typography } from "antd";
import WhiteIcon from "../assets/Drabridge Icon White.png";
import BlueIcon from "../assets/Drawbridge Icon Blue.png";
import { useThemeStore } from "../store/themestore";

const { Title } = Typography;

const ComingSoon = () => {
  const screens = Grid.useBreakpoint();
  const mobile = (screens?.xs || screens?.sm) && !screens?.md;
  const theme = useThemeStore((state) => state.theme);

  return (
    <>
      <Row
        justify={"center"}
        style={{ height: "100%", width: "100%", alignItems: "center" }}
      >
        <Col style={{ textAlign: "center", marginTop: mobile ? "15%" : "" }}>
          <img
            src={theme === "dark" ? WhiteIcon : BlueIcon}
            style={{ height: 150 }}
          />
          <Title style={{ color: theme === "dark" ? "white" : "" }}>
            Coming Soon
          </Title>
        </Col>
      </Row>
    </>
  );
};

export default ComingSoon;
