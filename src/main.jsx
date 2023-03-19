import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CorporateDataPage, { loader as CorporateDataLoader } from "./routes/fna/corporatedata";
import LocationsPage, { loader as LocationsLoader } from "./routes/fna/locations";
import StealthFounderPage, { loader as StealthFounderLoader } from "./routes/fna/stealthfounder";
import Root from "./routes/root";
import InvestmentProfilesPage, { loader as InvestmentProfilesLoader } from "./routes/vca/investmentprofiles";
import InvestmentsPage, { loader as InvestmentsLoader } from "./routes/vca/investments";

const routerObj = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "fna/stealthfounder",
        element: <StealthFounderPage />,
        loader: StealthFounderLoader
      },
      {
        path: "fna/corporatedata",
        element: <CorporateDataPage />,
        loader: CorporateDataLoader
      },
      {
        path: "fna/locations",
        element: <LocationsPage />,
        loader: LocationsLoader
      },
      {
        path: "vca/investments",
        element: <InvestmentsPage />,
        loader: InvestmentsLoader
      },
      {
        path: "vca/investorprofiles",
        element: <InvestmentProfilesPage />,
        loader: InvestmentProfilesLoader
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routerObj} />
);
