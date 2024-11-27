//regex
export const regexpValidation = /^(?=.*[A-Z])(?=.*\d.*\d.*\d)[A-Za-z\d]{5,15}$/;

//ROUTES
const RESUME_BUILDER_URL = "/resume-builder";

export const ROUTE_CONSTANTS = {
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: "/profile",
  RESUMES: "/resumes",
  RESUME_BUILDER: RESUME_BUILDER_URL,
  PERSONAL_INFO: `${RESUME_BUILDER_URL}/personal-info`,
  SKILLS: `${RESUME_BUILDER_URL}/skills`,
  PREVIEW: `${RESUME_BUILDER_URL}/preview`,
  SOCIAL: `${RESUME_BUILDER_URL}/social`,
  LANGUAGE: `${RESUME_BUILDER_URL}/language`,
};

//FIRESTORE PATH NAMES
export const FIRESTORE_PATH_NAMES = {
  REGISTERED_USERS: "registered-users",
};

//REALTIME PATH NAMES
export const REALTIME_PATH_NAMES = {
  RESUMES: "resumes",
};

//LANGUAGE PROFICIENCY LEVEL
export const PROFICIENCY_LEVEL = {
  1: "Elementary Proficiency",
  2: "Limited Working Proficiency",
  3: "Professional Working Proficiency",
  4: "Full Professional Proficiency",
  5: "Native or Bilingual Proficiency",
};
