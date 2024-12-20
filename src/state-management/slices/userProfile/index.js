import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../service";
import { FIRESTORE_PATH_NAMES } from "../../../utils/constant";
import { doc, getDoc } from "@firebase/firestore";

const initialState = {
  loading: true,
  authUserInfo: {
    isAuth: false,
    userData: {},
  },
  error: null,
};

export const fetchUserProfileInfo = createAsyncThunk(
  "data/fetchUserProfileInfo",
  async () => {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid } = user;
          const userRef = doc(db, FIRESTORE_PATH_NAMES.REGISTERED_USERS, uid);

          getDoc(userRef).then((userData) => {
            if (userData.exists()) {
              resolve(userData.data());
            } else {
              resolve(null);
            }
          });
        } else {
          reject("user does not exists");
        }
      });
    });
  }
);

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.authUserInfo.isAuth = action.payload;
    },
    setProfileImgUrl: (state, action) => {
      state.authUserInfo.userData.imgUrl = action.payload;
    },
  },
  extraReducers: (promise) => {
    promise
      .addCase(fetchUserProfileInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfileInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.authUserInfo.userData = action.payload;
        state.authUserInfo.isAuth = true;
      })
      .addCase(fetchUserProfileInfo.rejected, (state, action) => {
        state.loading = false;
        state.authUserInfo.isAuth = false;
        state.error = action.payload;
        state.authUserInfo.userData = {};
      });
  },
});

export const { setIsAuth, setProfileImgUrl } = userProfileSlice.actions;
export default userProfileSlice.reducer;
