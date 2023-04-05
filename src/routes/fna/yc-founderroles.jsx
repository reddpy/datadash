import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip
} from "chart.js";
import { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { useLoaderData } from "react-router-dom";
import roleData from "../../../json/YC-FounderRoles.json";
import { useThemeStore } from "../../store/themestore";

ChartJS.register(ArcElement, Tooltip, Legend);

export const loader = async () => {
  // const data = await fetch(
  //   "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
  // )
  //   .then((response) => response.json())
  //   .then((json) => {
  //     return json;
  //   });
  // return data;
  return roleData.data;
};

const YCFounderRole = () => {
  const data = useLoaderData();
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {}, [data]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        fontColor: theme === "dark" ? "white" : "black",
        position: "top",
        labels: {
          color: theme === "dark" ? "white" : "black",
        },
      },
      title: {
        display: true,
        text: "YC Founder Roles",
        color: theme === "dark" ? "white" : "black",
      },
    },
  };

  const labels = data.map((data_obj) => data_obj.value);

  const chartdata = {
    labels,
    datasets: [
      {
        // label: "YC Founder Roles",
        data: data.map((data_obj) => data_obj.count),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(8,0,239, 0.5)",
          "rgba(8,0,239, 0.5)",
          "rgba(8,0,239, 0.5)",
          "rgba(8,0,239, 0.5)",
          "rgba(8,0,239, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Doughnut options={options} data={chartdata} />
    </>
  );
};

export default YCFounderRole;
