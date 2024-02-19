import React, { Suspense } from "react";
import NotFound from "@pages/Error";
import { routes_here } from "./routes";
import { Route, Routes } from "react-router-dom";
import ScrollTop from "@components/ScrollTop";
import GlobalLayout from "@layouts/globalLayout";
import Home from "../pages/Home";

export default function AppRoutes() {
  const isAuthenticated = true; // bool, based on token availabilty

  const renderRoute = (route, isAuthenticated) => {
    if (route.isPrivate || isAuthenticated) {
      return route.element;
    }
  };

  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <React.Fragment>
        <ScrollTop />
        <Routes>
          {/* ================= All Routes ================ */}
          {routes_here.map((route, key) =>
            !isAuthenticated ? (
              <Route key={key} path="/" element={<Home />} />
            ) : (
              <Route
                // index
                key={key}
                path={route.path}
                element={
                  <GlobalLayout>
                    <Suspense fallback={<h1>Loading....</h1>}>
                      {renderRoute(route, isAuthenticated)}
                    </Suspense>
                  </GlobalLayout>
                }
              />
            )
          )}
          <Route
            path="*"
            element={
              <GlobalLayout>
                <NotFound />{" "}
              </GlobalLayout>
            }
          />
        </Routes>
      </React.Fragment>
    </Suspense>
  );
}
