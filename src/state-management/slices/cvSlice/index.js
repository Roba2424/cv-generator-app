import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { REALTIME_PATH_NAMES } from "../../../utils/constant";
import { get, ref } from "firebase/database";
import { auth, realTimedb } from "../../../service";

const initialState = {
  loading: false,
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
  myResumes: {},
};

export const fetchMyResumes = createAsyncThunk(
  "cv/fetchMyResumes",
  async (_, { rejectWithValue }) => {
    try {
      const userId = auth.currentUser?.uid;
      if (!userId) {
        throw new Error("User is not logged in");
      }

      const resumesRef = ref(
        realTimedb,
        `${REALTIME_PATH_NAMES.RESUMES}/${userId}`
      );
      const snapshot = await get(resumesRef);

      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return {};
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyResumes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyResumes.fulfilled, (state, action) => {
        state.myResumes = action.payload;
        state.loading = false;
      })
      .addCase(fetchMyResumes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
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
