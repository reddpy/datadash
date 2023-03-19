import { useLoaderData } from "react-router-dom";

export const loader = () => {
  return 'wow'
}

const LocationsPage = () => {
  const data = useLoaderData();

  return <p>founder activity locations</p>;
}

export default LocationsPage;
