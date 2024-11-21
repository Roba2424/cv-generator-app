import { Button } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import resumeIcon from "../../utils/images/resume_icon.svg";
import { ROUTE_CONSTANTS } from "../../utils/constant";
import "./style.css";

const Header = () => {
  const {
    authUserInfo: { isAuth, userData },
  } = useSelector((store) => store.userProfile);

  return (
    <div className="header">
      <div className="left-side">
        <img src={resumeIcon} alt="resume-icon" className="header-icon" />
        <p>Resume Bulider</p>
      </div>
      <div>
        {isAuth ? (
          <div>{userData.firstName}</div>
        ) : (
          <div className="btn-container">
            <Button style={{ backgroundColor: "#4ccdef", border: "#4ccdef" }}>
              <Link to={ROUTE_CONSTANTS.REGISTER}>Register</Link>
            </Button>
            <Button>
              <Link to={ROUTE_CONSTANTS.LOGIN}>Login</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
