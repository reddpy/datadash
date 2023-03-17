import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";

const routerObj = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "fna/stealthfounder",
        element: <p>founder activity stealth founders</p>,
      },
      {
        path: "fna/corporatedata",
        element: <p>founder activity corporatedata founders</p>,
      },
      {
        path: "fna/locations",
        element: <p>founder activity locations</p>,
      },
      {
        path: "vca/investments",
        element: <p>vc activity investments</p>,
      },
      {
        path: "vca/investorprofiles",
        element: <p>vc activity investorprofiles</p>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routerObj} />
);
