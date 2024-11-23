import { Link, Outlet, useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";
import { ROUTE_CONSTANTS } from "../../utils/constant";

const breadcrumbMap = {
  [ROUTE_CONSTANTS.PERSONAL_INFO]: "Personal Information",
  [ROUTE_CONSTANTS.SKILLS]: "Skills",
};

const ResumeBuilder = () => {
  const location = useLocation();

  const breadcrumbItems = Object.keys(breadcrumbMap).map((path) => {
    const extractedPart = location.pathname.split("/").slice(2).join("/");

    return {
      key: path,
      title:
        path === extractedPart ? (
          <b style={{ color: "black" }}>{breadcrumbMap[path]}</b>
        ) : (
          <Link to={path}>{breadcrumbMap[path]}</Link>
        ),
    };
  });

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} style={{ margin: `16px 0` }} />
      <Outlet />
    </div>
  );
};

export default ResumeBuilder;
