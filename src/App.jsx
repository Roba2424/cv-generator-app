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
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfileInfo } from "./state-management/slices/userProfile";
import LoadingWrapper from "./components/shared/LoadingWrapper";
import PersonalInfoForm from "./components/shared/PersonalInfoForm";
import SkillsForm from "./components/shared/SkillsForm";
import Profile from "./pages/Profile/index";
import ResumeBuilder from "./pages/ResumeBuilder/index";
import Resumes from "./pages/Resumes";
import Preview from "./pages/Preview";
import SocialLinksForm from "./components/shared/SocialLinkForm";
import LanguagesForm from "./components/shared/LanguagesForm";

function App() {
  const distpatch = useDispatch();
  const {
    loading,
    authUserInfo: { isAuth },
  } = useSelector((store) => store.userProfile);
  useEffect(() => {
    distpatch(fetchUserProfileInfo());
  }, [distpatch]);

  return (
    <LoadingWrapper loading={loading}>
      <RouterProvider
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
              <Route path={ROUTE_CONSTANTS.PROFILE} element={<Profile />} />
              <Route path={ROUTE_CONSTANTS.RESUMES} element={<Resumes />} />

              <Route
                path={ROUTE_CONSTANTS.RESUME_BUILDER}
                element={isAuth ? <ResumeBuilder /> : <Register />}
              >
                <Route
                  path={ROUTE_CONSTANTS.PERSONAL_INFO}
                  element={<PersonalInfoForm />}
                />
                <Route path={ROUTE_CONSTANTS.SKILLS} element={<SkillsForm />} />
                <Route
                  path={ROUTE_CONSTANTS.SOCIAL}
                  element={<SocialLinksForm />}
                />
                <Route path={ROUTE_CONSTANTS.PREVIEW} element={<Preview />} />
                <Route path={ROUTE_CONSTANTS.LANGUAGE} element={<LanguagesForm />} />
              </Route>
            </Route>
          )
        )}
      />
    </LoadingWrapper>
  );
}

export default App;
