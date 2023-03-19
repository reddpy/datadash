import { useLoaderData } from "react-router-dom";

export const loader = () => {
  return 'wow'
}

const InvestmentProfilesPage = () => {
  const data = useLoaderData();

  return <p>vc activity investorprofiles</p>;
}

export default InvestmentProfilesPage;
