import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../utils/constant";
import resumeIcon from "../../../utils/images/resume_icon.svg";
import "./style.css";
import { Button } from "antd";
import mainImage from "../../../utils/images/main-image.jpg";

const MainLayout = () => {
  return (
    <div className="main-layout-container">
      <div className="header">
        <div className="left-side">
          <img src={resumeIcon} alt="resume-icon" className="header-icon" />
          <p>Resume Bulider</p>
        </div>
        <div className="btn-container">
          <Button style={{ backgroundColor: "#4ccdef", border: "#4ccdef" }}>
            <Link to={ROUTE_CONSTANTS.REGISTER}>Register</Link>
          </Button>
          <Button>
            <Link to={ROUTE_CONSTANTS.LOGIN}>Login</Link>
          </Button>
        </div>
      </div>
      <div className="content">
        <h1>Online Resume Builder</h1>
        <div className="build-five">
          <h2>Build your brand-new resume in as little as 5 minutes.</h2>
          <img src={mainImage} alt="main-image" />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
