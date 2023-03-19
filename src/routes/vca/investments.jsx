import { useLoaderData } from "react-router-dom";

export const loader = () => {
  return 'wow'
}

const InvestmentsPage = () => {
  const data = useLoaderData();

  return <p>vc activity investments</p>;
}

export default InvestmentsPage;
