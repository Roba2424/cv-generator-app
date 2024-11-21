import Register from "./pages/auth/register";
import "./global/style.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ROUTE_CONSTANTS } from "./utils/constant";
import { useState } from "react";
import Login from "./pages/auth/login";
import MainLayout from "./components/layout/MainLayout";
import Profile from "./pages/Profile";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route>
            <Route
              path="/"
              element={
                isAuth ? (
                  <Navigate to={ROUTE_CONSTANTS.LOGIN} />
                ) : (
                  <MainLayout />
                )
              }
            />
            <Route
              path={ROUTE_CONSTANTS.LOGIN}
              element={
                isAuth ? <Navigate to={ROUTE_CONSTANTS.PROFILE} /> : <Login />
              }
            />
            <Route
              path={ROUTE_CONSTANTS.REGISTER}
              element={
                isAuth ? (
                  <Navigate to={ROUTE_CONSTANTS.PROFILE} />
                ) : (
                  <Register />
                )
              }
            />
            <Route path={ROUTE_CONSTANTS.PROFILE} element={<Profile />} />
          </Route>
        )
      )}
    />
  );
}

export default App;
