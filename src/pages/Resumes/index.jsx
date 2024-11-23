import { Link, Outlet, useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";
import { ROUTE_CONSTANTS } from "../../utils/constant";

const breadcrumbMap = {
  [ROUTE_CONSTANTS.PERSONAL_INFO]: "Personal Information",
  [ROUTE_CONSTANTS.SKILLS]: "Skills",
};

const Resumes = () => {
  const location = useLocation();
  const breadcrumbItems = Object.keys(breadcrumbMap).map((path) => ({
    key: path,
    title:
      path === location.pathname ? (
        <b style={{ color: "black" }}>{breadcrumbMap[path]}</b>
      ) : (
        <Link to={path}>{breadcrumbMap[path]}</Link>
      ),
  }));

  return (
    <div>
      <Breadcrumb
        items={breadcrumbItems}
        style={{ margin: `16px 0` }}
        className="active"
      />
      <Outlet />
    </div>
  );
};

export default Resumes;
