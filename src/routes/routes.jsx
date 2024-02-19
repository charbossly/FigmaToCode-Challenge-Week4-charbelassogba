import { lazy } from "react";

//---------------------------
// imports
//---------------------------
const Home = lazy(() => import("@pages/Home"));

//---------------------------
// exports
//---------------------------
export const routes_here = [
  {
    path: "/",
    element: <Home />,
    isPrivate: false,
  },

  //routes in objects
];
