import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfo: {
    name: "",
    email: "",
    phone: "",
    pitch: "",
  },
  education: [],
  socialLinks: {
    github: "",
    linkedin: "",
    facebook: "",
  },
  languages: [],
  skills: [],
};

const cvSlice = createSlice({
  name: "cv",
  initialState,
  reducers: {
    updatePersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    addLanguages: (state, action) => {
      state.languages.push(action.payload);
    },
    removeLanguage: (state, action) => {
      state.languages = state.languages.filter(
        (_, index) => index !== action.payload
      );
    },
    updateSocialLinks: (state, action) => {
      state.socialLinks = { ...state.socialLinks, ...action.payload };
    },
    addEducation: (state, action) => {
      state.education.push(action.payload);
    },
    addExperience: (state, action) => {
      state.experience.push(action.payload);
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    removeSkill: (state, action) => {
      state.skills = state.skills.filter(
        (_, index) => index !== action.payload
      );
    },
  },
});

export const {
  updatePersonalInfo,
  addEducation,
  addExperience,
  addSkill,
  removeSkill,
  addLanguages,
  removeLanguage,
  addSocialLink,
  updateSocialLinks,
} = cvSlice.actions;

export default cvSlice.reducer;
