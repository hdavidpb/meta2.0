import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./interfaces";
import { createUSer, login } from "./services";

const initialState: IInitialState = {
  isLogin: localStorage.getItem("access")!!,
  loading: false,
  loginLoading: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loggout: (state) => {
      state.isLogin = null;
      localStorage.removeItem("access");
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(createUSer.pending, (state) => {
      state.loading = true;
    });
    addCase(createUSer.fulfilled, (state, { payload }) => {
      state.loading = false;
    });
    addCase(login.pending, (state) => {
      state.loginLoading = true;
    });
    addCase(login.fulfilled, (state, { payload }) => {
      state.loginLoading = false;
      state.isLogin = payload!.access_token;
    });
    addCase(login.rejected, (state) => {
      state.loginLoading = false;
    });
  },
});

export const { loggout } = userSlice.actions;
export default userSlice.reducer;
