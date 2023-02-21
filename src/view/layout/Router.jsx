import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from ".";
import HomePage from "../home";
import IntroductionPage from "../introduction";
import ErrorPage from "../error";
import ProfolioLayout from "../profolio";
import ProfoliosPage from "../profolio/works";
import OtherPage from "../other";
import WoocommerceStorePage from "../profolio/works/WoocommerceStore";
import BasicComponentsPage from "../profolio/works/BasicComponents";
import DropdownPage from "../profolio/works/BasicComponents/pages/DropdownPage";
import AccordionPage from "../profolio/works/BasicComponents/pages/AccordionPage";
import ButtonPage from "../profolio/works/BasicComponents/pages/ButtonPage";
import ModalPage from "../profolio/works/BasicComponents/pages/ModalPage";
import TablePage from "../profolio/works/BasicComponents/pages/TablePage";
import CounterPage from "../profolio/works/BasicComponents/pages/CounterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "introduction",
        element: <IntroductionPage />,
      },
      {
        path: "profolio",
        element: <ProfolioLayout />,
        children: [
          {
            index: true,
            element: <ProfoliosPage />,
          },
          {
            path: "wooCommerceStore",
            element: <WoocommerceStorePage />,
          },
          {
            path: "basicComponents",
            element: <BasicComponentsPage />,
            children: [
              {
                index: true,
                element: <DropdownPage />,
              },
              {
                path: "accordion",
                element: <AccordionPage />,
              },
              {
                path: "button",
                element: <ButtonPage />,
              },
              {
                path: "modal",
                element: <ModalPage />,
              },
              {
                path: "table",
                element: <TablePage />,
              },
              {
                path: "counter",
                element: <CounterPage />,
              },
            ],
          },
        ],
      },
      {
        path: "others",
        element: <OtherPage />,
      },
    ],
  },
]);

export default router;
