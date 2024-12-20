import { Button } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import resumeIcon from "../../utils/images/resume_icon.svg";
import { ROUTE_CONSTANTS } from "../../utils/constant";
import "./style.css";
import AuthProfileDropDown from "../shared/AuthProfileDropDown";

const Header = () => {
  const {
    authUserInfo: { isAuth },
  } = useSelector((store) => store.userProfile);

  return (
    <div className="header">
      <div className="left-side">
        <img src={resumeIcon} alt="resume-icon" className="header-icon" />
        <p>Resume Bulider</p>
      </div>
      <div>
        {isAuth ? (
          <AuthProfileDropDown />
        ) : (
          <div className="btn-container">
            <Button>
              <Link to={ROUTE_CONSTANTS.LOGIN}>Sign In</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
