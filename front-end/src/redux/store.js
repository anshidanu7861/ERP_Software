import { configureStore } from "@reduxjs/toolkit";
import { adminSliceReducer } from "./slices";

const store = configureStore({
  reducer: {
    admin: adminSliceReducer,
  },
  devTools: true,
});

export default store;
