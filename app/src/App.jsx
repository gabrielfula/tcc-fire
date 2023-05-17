import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./components/MainPage/MainPage";

//Pages
import Temperatura from "./pages/Temperatura/Temp";

//Styles
import { GlobalStyled, Theme } from "./styles/Globals";
import { ThemeProvider } from "styled-components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Temperatura />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <GlobalStyled />
      <ThemeProvider theme={Theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
