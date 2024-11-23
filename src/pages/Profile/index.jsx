import { Button } from "antd";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../utils/constant";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <h2>My Resumes</h2>
        <Button>
          <Link to={ROUTE_CONSTANTS.RESUMES}>Resumes</Link>
        </Button>
      </div>

      <div>
        <h2>Create Resume</h2>
        <Button>
          <Link to={ROUTE_CONSTANTS.RESUME_BUILDER}>Create Resume</Link>
        </Button>
      </div>
    </div>
  );
};

export default Profile;
