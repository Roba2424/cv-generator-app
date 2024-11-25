import { configureStore } from "@reduxjs/toolkit";
import userProfileReducer from "../slices/userProfile";
import cvReducer from "../slices/cvSlice";

export const store = configureStore({
  reducer: { userProfile: userProfileReducer, cv: cvReducer },
});
