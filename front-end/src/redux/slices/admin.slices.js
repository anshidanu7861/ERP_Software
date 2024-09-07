import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosConfig } from "../../config/axiosConfig";

const initialState = {
  token: localStorage.getItem("token") || "",
  email: "",
  loggedIn: false,
  dashDetails: {},
};

// Ensure unique action type names
export const fetchAdmin = createAsyncThunk(
  "admin/fetchAdmin", // Unique action type
  async (_, { getState }) => {
    const { token } = getState().admin;
    if (token) {
      const response = await axiosConfig.get("/auth/single", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data; // Return response data
    } else {
      throw new Error("No token found");
    }
  }
);

export const fetchDashBoardDetails = createAsyncThunk(
  "admin/fetchDashBoardDetails", // Unique action type
  async (_, { getState }) => {
    const { token } = getState().admin;
    if (token) {
      const response = await axiosConfig.get("/auth/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data; // Return response data
    } else {
      throw new Error("No token found");
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdminInitialData: (state, { payload }) => {
      state.email = payload.findAdmin.email;
      state.token = payload.token;
      localStorage.setItem("token", payload.token);
      state.loggedIn = true;
    },
    logoutAdmin: (state, { payload }) => {
      state.token = "";
      state.loggedIn = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdmin.fulfilled, (state, action) => {
        console.log(action.payload);
        state.email = action.payload?.data?.response?.email;
        state.loggedIn = true;
      })
      .addCase(fetchAdmin.rejected, (state) => {
        state.loggedIn = false;
        localStorage.removeItem("token");
        state.token = "";
      })
      .addCase(fetchDashBoardDetails.fulfilled, (state, action) => {
        state.dashDetails = action.payload?.data || {};
      })
      .addCase(fetchDashBoardDetails.rejected, (state) => {
        state.dashDetails = {};
      });
  },
});

export const { setAdminInitialData, logoutAdmin } = adminSlice.actions;
export default adminSlice.reducer;
