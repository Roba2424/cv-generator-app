import { Button } from "antd";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../utils/constant";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      {/* TODO My Resumes shoule go page my-resumes*/}
      <div>
        <h2>My Resumes</h2>
        <Button>Resumes</Button>
      </div>

      <div>
        <h2>Create Resume</h2>
        <Button>
          <Link to={ROUTE_CONSTANTS.RESUMES}>Create Resume</Link>
        </Button>
      </div>
    </div>
  );
};

export default Profile;
