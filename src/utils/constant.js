//regex
export const regexpValidation = /^(?=.*[A-Z])(?=.*\d.*\d.*\d)[A-Za-z\d]{5,15}$/;

//ROUTES
export const ROUTE_CONSTANTS = {
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: "/profile",
  RESUMES: "/resumes",
  PERSONAL_INFO: `resumes/personal-info`,
  SKILLS: `resumes/skills`,
};

//FIRESTORE PATH NAMES
export const FIRESTORE_PATH_NAMES = {
  REGISTERED_USERS: "registered-users",
};
