import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfo: {
    name: "",
    email: "",
    phone: "",
    pitch: "",
  },
  socialLinks: {
    github: "",
    linkedin: "",
    facebook: "",
  },
  languages: [],
  skills: [],
  myResumes: [],
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
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    removeSkill: (state, action) => {
      state.skills = state.skills.filter(
        (_, index) => index !== action.payload
      );
    },
    addMyResumes: (state, action) => {
      state.myResumes.push(action.payload);
    },
    resetForm: () => initialState,
  },
});

export const {
  updatePersonalInfo,
  addSkill,
  removeSkill,
  addLanguages,
  removeLanguage,
  addSocialLink,
  updateSocialLinks,
  resetForm,
  addMyResumes,
} = cvSlice.actions;

export default cvSlice.reducer;
