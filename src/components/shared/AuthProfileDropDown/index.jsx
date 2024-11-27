import { Avatar, Dropdown, Flex, theme, Typography } from "antd";
import { ROUTE_CONSTANTS } from "../../../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { setIsAuth } from "../../../state-management/slices/userProfile";
import { auth } from "../../../service";

const { useToken } = theme;
const { Text } = Typography;

const getFullNameLetters = ({ firstName, lastName }) => {
  if (firstName && lastName) {
    return `${firstName[0]}  ${lastName[0]}`;
  }
};

const AuthProfileDropDown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useToken();
  const {
    authUserInfo: { userData },
  } = useSelector((state) => state.userProfile);
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(setIsAuth(false));
      navigate(ROUTE_CONSTANTS.LOGIN)
    } catch (error) {}
  };

  const items = [
    {
      label: "Profile",
      key: 0,
      onClick: () => navigate(ROUTE_CONSTANTS.PROFILE),
    },
    {
      label: "Resumes",
      key: 1,
      onClick: () => navigate(ROUTE_CONSTANTS.RESUMES),
    },
    {
      label: "Logout",
      key: 2,
      onClick: handleSignOut,
    },
  ];
  console.log(userData, "<<<<");
  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      dropdownRender={(menu) => {
        return (
          <div
            className="profile-dropdown-container"
            style={{
              borderRadius: token.borderRadiusLG,
              backgroundColor: token.colorBgElevated,
              boxShadow: token.boxShadowSecondary,
            }}
          >
            <Flex vertical align="center" style={{ padding: token.sizeXS }}>
              <Avatar
                className="user-profile-avatar"
                size="large"
                src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
              />
              <Text>{userData.firstName}</Text>
              <Text>{userData.email}</Text>
            </Flex>
            {menu}
          </div>
        );
      }}
    >
      <Avatar size="large" className="user-profile-avatar">
        {getFullNameLetters(userData)}
      </Avatar>
    </Dropdown>
  );
};
export default AuthProfileDropDown;
