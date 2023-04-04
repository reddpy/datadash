import { useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import ComingSoon from "../../UI/comingsoon";

export const loader = async () => {
  // const data = await fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
  //   .then((response) => response.json())
  //   .then((json) => { return json });
  // return data
  return "wow";
};

const { tableau } = window;

const StealthFounderPage = () => {
  const ref = useRef(null);
  const data = useLoaderData();
  const url =
    "https://public.tableau.com/views/StartupRegions_16805732464650/StartupRegions&:showVizHome=no&:showShareOptions=false";

  const initViz = () => {
    new tableau.Viz(ref.current, url, { hideTabs: true });
  };

  useEffect(initViz, []);

  // useEffect(() => {}, [data]);

  return <div ref={ref} style={{ height: "90%", width: "100%" }} />;
};

export default StealthFounderPage;
