import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./src/Components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./src/Components/AboutUs";
import Contact from "./src/Components/Contact";
import NotFoundPage from "./src/Components/PageNotFound";
import Body from "./src/Components/Layout/Body";
import Header from "./src/Components/Layout/Header";
import RestuarantMenu from "./src/Components/Restaurents/RestuarantMenu";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import appStore from "./src/utils/Redux/appStore";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
      {
        path: "/resturantMenu/:restId",
        element: <RestuarantMenu />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={appStore}>
    <StrictMode>
      <RouterProvider router={appRouter} />
    </StrictMode>
  </Provider>
);
