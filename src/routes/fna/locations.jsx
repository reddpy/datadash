import { useLoaderData } from "react-router-dom";
import ComingSoon from "../../UI/comingsoon";

export const loader = () => {
  return "wow";
};

const LocationsPage = () => {
  const data = useLoaderData();

  return <ComingSoon />;
};

export default LocationsPage;
