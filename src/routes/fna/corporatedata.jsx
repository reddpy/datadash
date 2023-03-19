import { useLoaderData } from "react-router-dom";

export const loader = () => {
  return 'wow'
}

const CorporateDataPage = () => {
  const data = useLoaderData();
  return <p>founder activity corporatedata founders</p>;
}

export default CorporateDataPage;
