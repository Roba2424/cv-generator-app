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
import { useEffect } from "react";
import Login from "./pages/auth/login";
import MainLayout from "./components/layout/MainLayout";
import Profile from "./pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfileInfo } from "./state-management/slices/userProfile";
import LoadingWrapper from "./components/shared/LoadingWrapper";

function App() {
  const distpatch = useDispatch();
  const {
    loading,
    authUserInfo: { isAuth },
  } = useSelector((store) => store.userProfile);
  useEffect(() => {
    distpatch(fetchUserProfileInfo());
  }, []);

  return (
    <LoadingWrapper loading={loading}>
      <RouterProvider
        future={{
          v7_startTransition: true,
        }}
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
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
              <Route
                path={ROUTE_CONSTANTS.PROFILE}
                element={isAuth ? <Profile /> : <Register />}
              />
            </Route>
          )
        )}
      />
    </LoadingWrapper>
  );
}

export default App;
