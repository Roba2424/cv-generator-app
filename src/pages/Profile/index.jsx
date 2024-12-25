import { Button } from "antd";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../utils/constant";
import "./style.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-heading">Profile Page</h1>

      <div className="profile-section">
        <h2 className="profile-subheading">My Resumes</h2>
        <Button type="primary" className="profile-button">
          <Link to={ROUTE_CONSTANTS.RESUMES}>Resumes</Link>
        </Button>
      </div>

      <div className="profile-section">
        <h2 className="profile-subheading">Create Resume</h2>
        <Button type="dashed" className="profile-button">
          <Link to={ROUTE_CONSTANTS.RESUME_BUILDER}>Create Resume</Link>
        </Button>
      </div>
    </div>
  );
};

export default Profile;