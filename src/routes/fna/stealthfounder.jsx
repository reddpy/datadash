import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";



export const loader = async () => {
  const data = await fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
    .then((response) => response.json())
    .then((json) => { return json });
  return data
}


const StealthFounderPage = () => {
  const data = useLoaderData();

  useEffect(() => {
  }, [data]);

  return (
    <>
      <p>wow</p>
    </>
  );
}

export default StealthFounderPage;
