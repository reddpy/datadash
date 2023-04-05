import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";
import YCCompanyHQ, { loader as YCCompanyHQLoader } from "./routes/fna/yc-companyhq";
import YCFounderPriorEmployer, { loader as YCFounderPriorEmployerLoader } from "./routes/fna/yc-founderprioremployers";
import YCFounderRole, {
  loader as YCFounderRoleLoader,
} from "./routes/fna/yc-founderroles";
import YCSchools, { loader as YCFounderSchools } from "./routes/fna/yc-schools";
import Root from "./routes/root";
import InvestmentProfilesPage, {
  loader as InvestmentProfilesLoader,
} from "./routes/vca/investmentprofiles";
import InvestmentsPage, {
  loader as InvestmentsLoader,
} from "./routes/vca/investments";
import Welcome from "./UI/welcome";

const routerObj = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Welcome /> },
      {
        path: "fna/yc-companyhq",
        element: <YCCompanyHQ />,
        loader: YCCompanyHQLoader,
      },
      {
        path: "fna/yc-prioremployer",
        element: <YCFounderPriorEmployer />,
        loader: YCFounderPriorEmployerLoader,
      },
      {
        path: "fna/yc-founderrole",
        element: <YCFounderRole />,
        loader: YCFounderRoleLoader,
      },
      {
        path: "fna/yc-schools",
        element: <YCSchools />,
        loader: YCFounderSchools,
      },
      {
        path: "vca/investments",
        element: <InvestmentsPage />,
        loader: InvestmentsLoader,
      },
      {
        path: "vca/investorprofiles",
        element: <InvestmentProfilesPage />,
        loader: InvestmentProfilesLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routerObj} />
);
