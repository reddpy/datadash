import { useLoaderData } from "react-router-dom"


export const loader = () => {
  return 'wow'
}

const StealthFounderPage = () => {
  const data = useLoaderData();

  return <p>founder activity stealth founders</p>;
}

export default StealthFounderPage;
