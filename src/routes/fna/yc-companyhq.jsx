import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useLoaderData } from "react-router-dom";
import companyData from "../../../json/YC-CompanyHQ.json";
import { useThemeStore } from "../../store/themestore";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const loader = async () => {
  // const data = await fetch(
  //   "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
  // )
  //   .then((response) => response.json())
  //   .then((json) => {
  //     return json;
  //   });
  // return data;
  return companyData.data;
};

const YCCompanyHQ = () => {
  const data = useLoaderData();
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {}, [data]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        fontColor: theme === "dark" ? "white" : "black",
        position: "bottom",
        labels: {
          color: theme === "dark" ? "white" : "black",
        },
        onClick: (e) => e.stopPropagation(),
      },
      title: {
        display: true,
        text: "YC Company HQ Locations",
        color: theme === "dark" ? "white" : "black",
      },
    },

    scales: {
      y: {
        ticks: {
          color: theme === "dark" ? "white" : "black",
          beginAtZero: true,
        },
        grid: {
          color: "rgba(210, 210, 210, 0.5)",
        },
      },
      x: {
        ticks: {
          color: theme === "dark" ? "white" : "black",
          beginAtZero: true,
        },
        grid: {
          color: "rgba(210, 210, 210, 0.5)",
        },
      },
    },
  };

  const labels = data.map((data_obj) => data_obj.value);

  const chartdata = {
    labels,
    datasets: [
      {
        // label: "YC Company HQs",
        data: data.map((data_obj) => data_obj.count),
        backgroundColor: "rgba(8,0,239, 0.5)",
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={chartdata} />
    </>
  );
};

export default YCCompanyHQ;
