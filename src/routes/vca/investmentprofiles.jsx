import { useLoaderData } from "react-router-dom";
import ComingSoon from "../../UI/comingsoon";

export const loader = () => {
  return "wow";
};

const InvestmentProfilesPage = () => {
  const data = useLoaderData();

  return <ComingSoon />;
};

export default InvestmentProfilesPage;
