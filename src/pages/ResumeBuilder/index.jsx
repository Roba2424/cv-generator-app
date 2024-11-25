import { Link, Outlet, useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";
import { ROUTE_CONSTANTS } from "../../utils/constant";
import "./style.css";

const breadcrumbMap = {
  [ROUTE_CONSTANTS.PERSONAL_INFO]: "Personal Information",
  [ROUTE_CONSTANTS.SKILLS]: "Skills",
  [ROUTE_CONSTANTS.SOCIAL]: "Social",
  [ROUTE_CONSTANTS.LANGUAGE]: "Language",
};

const ResumeBuilder = () => {
  const location = useLocation();

  const breadcrumbItems = Object.keys(breadcrumbMap).map((path) => {
    return {
      key: path,
      title:
        path === location.pathname ? (
          <b style={{ color: "black" }}>{breadcrumbMap[path]}</b>
        ) : (
          <Link to={path}>{breadcrumbMap[path]}</Link>
        ),
    };
  });

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} style={{ margin: `16px 0` }} />
      <div className="resume-form-container">
        <Outlet />
      </div>
    </div>
  );
};

export default ResumeBuilder;
