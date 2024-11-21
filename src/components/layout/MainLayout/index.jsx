import { Outlet } from "react-router-dom";
import Header from "../../Header";

const MainLayout = () => {
  return (
    <div className="main-layout-container">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
